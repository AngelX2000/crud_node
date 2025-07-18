const express = require('express');
const router = express.Router();
const controlador = require('../controllers/UsuarioController');

// Ruta para obtener todos los usuarios
router.get('/usuarios/todos', controlador.obtenerUsuarios);
// Ruta para obtener un usuario específico por ID
router.get('/usuarios/buscar/:id', controlador.obtenerUsuarioPorId);
// Ruta para crear un nuevo usuario
router.post('/usuarios/crear', controlador.crearUsuario);
//ruta para modificar o actualizar
router.put('/usuarios/modificar/:id', controlador.modificarUsuario);   
//ruta para eliminar usuario
router.delete('/usuarios/eliminar/:id', controlador.eliminarUsuario)
module.exports=router; // Exporta las rutas para que puedan ser utilizadas en index.js

