const express = require('express');
const path = require('path');
const bParser = require('body-parser');
const cParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
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
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, './data/')));

const sessionParser = session({
  secret: 'asdsadsasadsadad',
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

const getData =  require('./controllers/global/data');
app.get('/data/all', getData);

const message =  require('./controllers/global/message');
app.post('/send-message', message);

const divorce =  require('./controllers/global/divorce');
app.post('/set/divorce', divorce);

const signin =  require('./controllers/global/signin');
app.post('/session/signin', signin);

const blog =  require('./controllers/panel/blogPanel');
app.post('/blog/remove', blog);
app.post('/blog/add', blog);

app.get('/signout', function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/'); //Inside a callback… bulletproof!
  });
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(80, function(){
  console.warn('Server started from port 80');
  global.blogImageFolder = './data/images/blog/';
});
