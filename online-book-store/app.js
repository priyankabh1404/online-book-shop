var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');
var expressHbs = require('express-handlebars');

var indexRouter = require('./routes/index');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/book-store', {useNewUrlParser : true,
  useUnifiedTopology :true}).then(() => {
    console.log('Database Successfully Connected')
},
error => {
    console.log('Database error:' + error)
} 
  );
var app = express();

// view engine setup
app.engine('.hbs',expressHbs({defaultLayout : 'layout',extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir)); 
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);

// //api route
// app.use('/api',bookRoute);


//create port
const port = process.env.port || 8007;
app.listen(port,() => {
    console.log('Listening port on:' +port);
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.get('/', (req,res)=>{
  res.send('invalid EndPoint');
})



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
