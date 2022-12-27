var express = require('express');
var {json}= require('express');
var morgan = require('morgan');
//importamos las rutas
var userRouter = require('./routes/user');
var libroRouter = require('./routes/libro');


var app = express();



//middleware

app.use(morgan('dev'));
app.use(json());
//routers
app.use('/api/user',userRouter);
app.use('/api/libros',libroRouter);

module.exports=app;
