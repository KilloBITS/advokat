'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require("fs");

router.use(cookieParser());

let getdata = (req, res, next) => {
  mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    const db = client.db("LAWYER");
    const config = db.collection("config");
    const menu = db.collection("menu");
    const head = db.collection("head");
    const about = db.collection("about");

    if (err) return console.log(err);

    config.find({AI: 0}).toArray(function(err, results_config) {
      menu.find().toArray(function(err, results_menu) {
        head.find({AI: 0}).toArray(function(err, results_head) {
          about.find({AI: 0}).toArray(function(err, results_about) {
            let GlobalData = {
              config: results_config[0],
              menu: results_menu,
              head: results_head[0],
              about: results_about[0]
            };
            GlobalData.isAdmin = (req.session.user_id !== undefined)?true:true;
            res.send({code: 200, data: GlobalData});
          });
        });
      });
    });
  });
};

router.post('/getData', getdata);


module.exports = router;
