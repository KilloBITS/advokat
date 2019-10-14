'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const fs = require("fs");

router.use(cookieParser());


const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'cristall.bot.site@gmail.com',
		pass: 'cristallbot0907'
	}
});

let divorce = (req, res, next) => {
  mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    const db = client.db("LAWYER");
    const alerts = db.collection("alerts");

    if (err) return console.log(err);

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

    alerts.insertOne(AlertsData);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    var div_kids = "<div style='font-weight: bold'>Наявність у шлюбі дитини, що не досягла одного року? Або дружина вагітна?</div></br><span>"+((req.body.divorce_1)?"Так":"Ні")+"</span>";
    var div_kidsNo18 = "<div style='font-weight: bold'>Наявність у шлюбі спільних з чоловіком/дружиною дітей, що не досягли повноліття ?</div></br><span>"+((req.body.divorce_2)?"Так":"Ні")+"</span>";
    var div_proti = "<div style='font-weight: bold'>Хтось з подружжя проти розірвання шлюбу?</div></br><span>"+((req.body.divorce_3)?"Так":"Ні")+"</span>";


    var div_name = "<div style='font-weight: bold'>Імя</div></br><span>"+req.body.divorce_4+"</span>";
    var div_country = "<div style='font-weight: bold'>Населений пункт</div></br><span>"+req.body.divorce_5+"</span>";
    var div_number = "<div style='font-weight: bold'>Номер телефону</div></br><span>"+req.body.divorce_6+"</span>";

    let data = req.body.text;
    let message = "<div>"+div_kids+div_kidsNo18+div_proti+div_name+div_country+div_number+"<div>";
    const mailOptions = {
        from: "cristall.bot.site@gmail.com", // sender address
        to: "mr.kalinuk@gmail.com",//"advokat.sokal@gmail.com", // list of receivers advokat.sokal@gmail.com
        subject: "Сообщение с сайта Solister (Розлучення онлайн) | "+today  , // Subject line
        html: message, // plain text body
    };

    transporter.sendMail(mailOptions);

    res.send({code: 200});
  });

};

router.post('/set/divorce', divorce);


module.exports = router;
