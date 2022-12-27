var sequelize = require('../database/database');
var Sequelize = require('sequelize');


const Recientes = sequelize.define("recientes",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_libro:{
        type: Sequelize.INTEGER,
    },
    id_usuario:{
        type: Sequelize.INTEGER,
    },
    fecha_consulta:{
        type:Sequelize.DATE,
    }


},{
    timestamps:false,
});

module.exports = Recientes;