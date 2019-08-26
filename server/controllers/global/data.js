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
    const design = db.collection("design");
    const users = db.collection("users");
    const menu = db.collection("menu");
    const head = db.collection("head");
    const about = db.collection("about");
    const statistic = db.collection("statistic");
    const services = db.collection("services");
    const news = db.collection("news");
    const blog = db.collection("blog");
    const contacts = db.collection("contacts");
    const socials = db.collection("socials");
    const divorce = db.collection("divorce");

    if (err) return console.log(err);

    console.log('getted data')
    config.find({AI: 0}).toArray(function(err, results_config) {
      design.find({AI: 0}).toArray(function(err, results_design) {
        menu.find().toArray(function(err, results_menu) {
          head.find({AI: 0}).toArray(function(err, results_head) {
            about.find({AI: 0}).toArray(function(err, results_about) {
              statistic.find({AI: 0}).toArray(function(err, results_statistic) {
                services.find({AI: 0}).toArray(function(err, results_services) {
                  news.find({AI: 0}).toArray(function(err, results_news) {
                    blog.find({AI: 0}).toArray(function(err, results_blog) {
                      contacts.find({AI: 0}).toArray(function(err, results_contacts) {
                        socials.find({AI: 0}).toArray(function(err, results_socials) {
                          divorce.find({AI: 0}).toArray(function(err, results_divorce) {
                            users.find({AI: 0}).toArray(function(err, results_user) {
                              let GlobalData = {
                                config: results_config[0],
                                design: results_design[0],
                                menu: results_menu,
                                head: results_head[0],
                                about: results_about[0],
                                statistic: results_statistic[0],
                                news: results_news[0],
                                services: results_services[0],
                                blog: results_blog[0],
                                contacts: results_contacts[0],
                                socials: results_socials[0],
                                divorce: results_divorce[0],
                                user: (results_user.length > 0)?results_user[0]:null
                              };
                              GlobalData.isAdmin = (req.session.user_id !== undefined)?true:false;
                              res.send({code: 200, data: GlobalData});
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
};

router.get('/data/all', getdata);


module.exports = router;
