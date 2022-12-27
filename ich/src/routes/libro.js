var Router = require('express');
var router = new Router();
var LibroDao = require('../controlles/libro.controller');
//api de usuario
router.get('/',LibroDao.allLibros);
router.get('/:id',LibroDao.getLibros);
router.post('/',LibroDao.createLibros);
router.delete('/:id',LibroDao.deleteLibros);
router.put('/:id',LibroDao.updateLibros);



module.exports=router