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
    const news_table = db.collection("news");

    if (err) return console.log(err);
    console.log(req.body.AI)
    news_table.find({AI: 0}).toArray(function(err, results_news) {
      var newNews = results_news[0].blog;
      console.log(newNews)
      newBlog.splice(newNews.findIndex(x => x.AI === parseInt(req.body.AI) ), 1);
      news_table.updateOne({AI: 0},{ $set: { news: newNews }});
  		res.send({code:500, blog: newNews});
  	});
  });
};

router.post('/news/remove', remove);

const add = (req, res, next) => {
  mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    const db = client.db("LAWYER");
    const news_table = db.collection("news");
    if (err) return console.log(err);
    news_table.find({AI: 0}).toArray(function(err, results_news) {
      var oldNews = (results_news[0].news.length <= 0)?[]:results_news[0].news;
      var fileNameSuka = '';
      var form = new formidable.IncomingForm();
      form.parse(req);
      form.on('fileBegin', function (name, file){
          file.path = global.blogImageFolder + file.name;
          new formidable.IncomingForm().parse(req, (err, fields, files) => {
            var newNews = {
              title: fields.title,
              text: fields.text,
              image: file.name,
              AI: oldBlog.length+1,
            };
            oldNews.push(newNews)
            news_table.updateOne({AI: 0},{ $set: { news: oldNews }});
            res.send({code:500, blog: oldNews});
          })
      });
      form.on('file', function (name, file){
          console.log('Uploaded ' + file.name);
      });
    });
  });
};
router.post('/news/add', add);

module.exports = router;
