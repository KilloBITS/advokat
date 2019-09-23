'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require("fs");
var formidable = require('formidable');

router.use(cookieParser());

const remove = (req, res, next) => {
  mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    const db = client.db("LAWYER");
    const blog_table = db.collection("blog");

    if (err) return console.log(err);
    console.log(req.body.AI)
    blog_table.find({AI: 0}).toArray(function(err, results_blog) {
      var newBlog = results_blog[0].blog;
      console.log(newBlog)
      newBlog.splice(newBlog.findIndex(x => x.AI === parseInt(req.body.AI) ), 1);
      blog_table.updateOne({AI: 0},{ $set: { blog: newBlog }});
  		res.send({code:500, blog: newBlog});
  	});
  });
};

router.post('/blog/remove', remove);

const add = (req, res, next) => {
  mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    const db = client.db("LAWYER");
    const blog_table = db.collection("blog");
    if (err) return console.log(err);
    blog_table.find({AI: 0}).toArray(function(err, results_blog) {
      var oldBlog = (results_blog[0].blog.length <= 0)?[]:results_blog[0].blog;
      var fileNameSuka = '';
      var form = new formidable.IncomingForm();
      form.parse(req);
      form.on('fileBegin', function (name, file){
          file.path = global.blogImageFolder + file.name;
          new formidable.IncomingForm().parse(req, (err, fields, files) => {
            var newBlog = {
              title: fields.title,
              text: fields.text,
              image: file.name,
              tags: fields.tags,
              date:"12.08.2019",
              AI: oldBlog.length+1,
            };
            oldBlog.push(newBlog)
            blog_table.updateOne({AI: 0},{ $set: { blog: oldBlog }});
            res.send({code:500, blog: oldBlog});
          })
      });
      form.on('file', function (name, file){
          console.log('Uploaded ' + file.name);
      });
    });
  });
};
router.post('/blog/add', add);

module.exports = router;
