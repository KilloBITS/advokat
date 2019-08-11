const express = require('express');
const path = require('path');
const bParser = require('body-parser');
const cParser = require('cookie-parser');
const fs = require("fs");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

let sessionParser = session({
  secret: '2C44-4D44-WppQ38S',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: 'mongodb://localhost:27017/LAWYER'
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // two weeks
  }
});

app.use(sessionParser);

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(express.urlencoded({limit: '50mb'}));
app.use(bParser.urlencoded( {limit: '50mb', extended: true} ));
app.use(bParser.json({limit: '50mb', extended: true}));
// app.use(cParser());
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, './data/')));

const getData =  require('./controllers/global/data');
app.post('/getData', getData);

app.get('/*', function (req, res) {
  // if(fs.existsSync(path.join(__dirname, '../build', 'index.html'))){
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  // }else{
  //   res.sendFile(path.join(__dirname, '../pages', 'update.html'));
  // }
});

app.listen(5004, function(){
  console.warn('Server started from port 5004');
});
