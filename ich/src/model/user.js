var sequelize = require('../database/database');
var Sequelize = require('sequelize');


const User = sequelize.define("usuarios",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre:{
        type:Sequelize.STRING,

    },
    apellido :{
        type: Sequelize.STRING,
    },
    correo:{
        type:Sequelize.STRING,
    },
    contrasena:{
        type:Sequelize.STRING,
    },
    estado:{
        type:Sequelize.INTEGER,
    },
    roles:{
        type:Sequelize.STRING,
    }
},{
    timestamps:false,
});


module.exports = User;