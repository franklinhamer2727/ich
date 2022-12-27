var sequelize = require('../database/database');
var Sequelize = require('sequelize');

const Libros = sequelize.define("libros",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title:{
        type:Sequelize.STRING,

    },
    author :{
        type: Sequelize.STRING,
    },
    content:{
        type:Sequelize.STRING,
    },
    content_short:{
        type:Sequelize.STRING,
    },
    publisher:{
        type:Sequelize.STRING,
    },
    publisher_date:{
        type:Sequelize.STRING,
    },
    pages :{
        type: Sequelize.STRING,
    },
    language:{
        type:Sequelize.STRING,
    },
    url_details:{
        type:Sequelize.STRING,
    },
    url_download:{
        type:Sequelize.STRING,
    },
    cover:{
        type:Sequelize.STRING,
    },
    thumbnail:{
        type:Sequelize.STRING,
    },
    num_comments:{
        type:Sequelize.STRING,
    },
    fecha:{
        type:Sequelize.DATE,
    },
    id_usuarios: {
        type: Sequelize.INTEGER,
    }

},{
    timestamps:false,
});

module.exports = Libros;