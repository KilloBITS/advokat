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
    const config_table = db.collection("config");
    const design_table = db.collection("design");
    const users_table = db.collection("users");
    const menu_table = db.collection("menu");
    const head_table = db.collection("head");
    const about_table = db.collection("about");
    const statistic_table = db.collection("statistic");
    const services_table = db.collection("services");
    const news_table = db.collection("news");
    const blog_table = db.collection("blog");
    const contacts_table = db.collection("contacts");
    const socials_table = db.collection("socials");
    const divorce_table = db.collection("divorce");
    const return_table = db.collection("return");

    if (err) return console.log(err);

    console.log('getted data')
    config_table.find({AI: 0}).toArray(function(err, results_config) {
      design_table.find({AI: 0}).toArray(function(err, results_design) {
        menu_table.find().toArray(function(err, results_menu) {
          head_table.find({AI: 0}).toArray(function(err, results_head) {
            about_table.find({AI: 0}).toArray(function(err, results_about) {
              statistic_table.find({AI: 0}).toArray(function(err, results_statistic) {
                services_table.find({AI: 0}).toArray(function(err, results_services) {
                  news_table.find({AI: 0}).toArray(function(err, results_news) {
                    blog_table.find({AI: 0}).toArray(function(err, results_blog) {
                      contacts_table.find({AI: 0}).toArray(function(err, results_contacts) {
                        socials_table.find({AI: 0}).toArray(function(err, results_socials) {
                          divorce_table.find({AI: 0}).toArray(function(err, results_divorce) {
                            return_table.find({AI: 0}).toArray(function(err, results_return) {
                              users_table.find({AI: 0}).toArray(function(err, results_user) {
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
                                  return: results_return[0],
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
  });
};

router.get('/data/all', getdata);


module.exports = router;
