const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Car = sequelize.define('car', {
    // Definimos las columnas aquí
    brand:{
        type: DataTypes.STRING,
        allowNull: false
    },
    model:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
    },
    color:{
        type: DataTypes.STRING,
        allowNull: false
    },
    year:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:false,
    }

})
module.exports = Car;