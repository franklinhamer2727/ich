var {Router} = require('express');
var router = new Router();
var UserDao = require('../controlles/user.controller');

//api de usuario
router.get('/',UserDao.allUsuario);
router.get('/:id',UserDao.getUsuario);
router.post('/',UserDao.createUsuario);
router.delete('/:id',UserDao.deleteUsuario);
router.put('/:id',UserDao.updateUsuario);

module.exports =router;