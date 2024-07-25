const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    firts_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100),
         allowNull:false,
    },
    email: {
        type: DataTypes.STRING(100),
         allowNull:false,
         unique:true,
    },
    phone: {
        type: DataTypes.INTEGER,
         allowNull:false,

    },
});

module.exports = User;