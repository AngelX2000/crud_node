const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
// Definimos el modelo de Usuario
const Usuario = sequelize.define('Usuario', {
    nombre: {
        type:DataTypes.STRING, // Tipo de dato: cadena de texto
        allowNull: false // No puede ser nulo
    },
    email: {
        type:DataTypes.STRING, // Tipo de dato: cadena de texto
        allowNull: false, // No puede ser nulo
        unique: true // Debe ser único
    }

});

module.exports = Usuario;
// Exportamos el modelo para poder usarlo en otros archivos
// Este modelo representa la tabla 'usuarios' en la base de datos
// Sequelize se encargará de crear la tabla si no existe y manejar las operaciones CRUD
