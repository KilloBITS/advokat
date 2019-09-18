'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require("fs");

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
    console.log(req.body)
    blog_table.find({AI: 0}).toArray(function(err, results_blog) {
      var oldBlog = results_blog[0].blog;
      var dir = "../../data/images/blog/";

      if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
      }

      var base64Data = res_image.replace(/^data:image\/(png|gif|jpeg|jpg);base64,/,'');

      fs.writeFile(dir + '/' +  "IMG_" + (oldBlog.length+1) + ".jpg", base64Data, 'base64', function(err) {
        var newBlog = {
          title: req.body.title,
          text: req.body.title,
          image: "IMG_" + (oldBlog.length+1) + ".jpg",
          tags: req.body.title,
          date:"12.08.2019",
          AI: oldBlog.length+1,
        };

        oldBlog.push(newBlog)
        console.log(oldBlog.length)
        blog_table.updateOne({AI: 0},{ $set: { blog: newBlog }});
        res.send({code:500, blog: newBlog});
      });
  	});
  });
};

router.post('/blog/add', add);

module.exports = router;
