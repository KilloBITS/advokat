'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

const signinData = (req, res) => {
  const signInData = req.body.data
  mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    const db = client.db("LAWYER");
    const users_table = db.collection("users");
    if (err) return console.log(err);
    users_table.find({login: signInData.login}).toArray(function(err, results_user) {
      if(results_user.length > 0){
        if(results_user[0].password === signInData.password){
          req.session.user = results_user[0].login;
          res.send({code: 200, data: true});
        }else{
          res.send({code: 300});
        }
      }else{
        res.send({code: 300})
      }
    });
  });
};

router.post('/session/signin', signinData);

module.exports = router;
