const Usuario = require('../models/Usuario');// Importa el modelo de Usuario

// Controlador para manejar las operaciones relacionadas con los usuarios
exports.obtenerUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll(); // Obtiene todos los usuarios de la base de datos
    res.json(usuarios); // Devuelve la lista de usuarios en formato JSON
};