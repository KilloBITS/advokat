'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require("fs");

router.use(cookieParser());

let divorce = (req, res, next) => {
  mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    const db = client.db("LAWYER");
    const alerts = db.collection("alerts");

    if (err) return console.log(err);

    console.log(req.body);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    let AlertsData = {
      view: false,
      type: "divorce",
      date: today,
      information: req.body
    };

    alerts.insertOne(AlertsData)

    res.send({code: 200});
  });

};

router.post('/set/divorce', divorce);


module.exports = router;
