const express = require('express');
const router = express.Router();
const controlador = require('../controllers/UsuarioController');

// Ruta para obtener todos los usuarios
router.get('/usuarios/todos', controlador.obtenerUsuarios);