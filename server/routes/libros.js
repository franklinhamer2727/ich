var express = require('express');
var Router = express.Router();

var Libros = require('../controller/libros');

Router.get('/',Libros.list);
Router.get('/show/:id',Libros.show);
Router.get('/create',Libros.create);
Router.post('/save',Libros.save);
Router.get('/edit/:id',Libros.edit);
Router.post('/update/:id',Libros.update);
Router.post('/delete/:id',Libros.delete);


module.exports = Router;
