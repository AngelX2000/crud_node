const Usuario = require('../models/Usuario');// Importa el modelo de Usuario

// Controlador para manejar las operaciones relacionadas con los usuarios
exports.obtenerUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll(); // Obtiene todos los usuarios de la base de datos
    res.json(usuarios); // Devuelve la lista de usuarios en formato JSON
};



exports.obtenerUsuarioPorId = async (req,res)=>{
const id =parseInt (req.params.id); // Obtiene el ID del usuario desde los parámetros de la solicitud
const usuario=await Usuario.findByPk(id); // Busca el usuario por su ID en la base de datos
if(!usuario){
    return res.status(404).json({ mensaje: "Usuario no encontrado"}); // Si no se encuentra el usuario, devuelve un error 404    
}
res.json(usuario); // Devuelve el usuario encontrado en formato JSON

};




exports.crearUsuario = async (req,res)=>{
    const { nombre, email } = req.body; // Obtiene los datos del nuevo usuario desde el cuerpo de la solicitud
    const nuevoUsuario = {
        nombre,
        email, } // Crea un objeto con los datos del nuevo usuario
        const nuevo= await Usuario.create(nuevoUsuario); // Crea el nuevo usuario en la base de datos
        res.status(201).json({
            mensaje: "Usuario creado correctamente",
            
        }); 

};




exports.modificarUsuario = async (req,res)=>{
    const id=parseInt(req.params.id);//capturar el id por params
    const {nuevoNombre}=req.body;//capturar del body el nuevo nombre
    const usuario=await Usuario.findByPk(id);//buscar el usuario que tenga el id
    if(!usuario){
        res.status(404).json({mensaje: "usuario no encontrado"})//si no encuentra res. 404
    }
    await usuario.update({nombre:nuevoNombre})//modificar el usuario con el id encontrado
    res.status(201).json({
        mensaje: `usuario actualizado`, datos: usuario
    })
}





exports.eliminarUsuario = async (req,res)=>{
    const id=parseInt(req.params.id);
    const usuario=await Usuario.findByPk(id);
    if(!usuario){
        res.status(404).json({mensaje: "usuario no encontrado"})
    }
    await usuario.destroy();
    res.status(201).json({mensaje: 'usuario eliminado'})
}