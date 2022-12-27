var Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'ich',
    'postgres',
    'postgres',
    {
        host:"localhost",
        dialect :"postgres",
        logging: false
    }
)
module.exports= sequelize;