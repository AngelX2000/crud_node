const express=require('express'); //importar paquetes instalados con npm
const app=express();  //la variable guarda una instancia de un servidor de express
require("dotenv").config();//cargamos .env
const sequelize=require("./config/database") //importamos la configuracion de la base de datos
const UsuarioRoutes=require('./routes/UsuarioRoutes');//importamos las rutas de usuario

const port=process.env.PORT//accedemos a la variable

app.use(express.json())//esto permite  pasar informacion por el body
app.use("/", UsuarioRoutes);//le decimos a express que use las rutas de usuario
//promesa
sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`servidor activo en el puerto ${port}`)
})

}).catch((error)=>{
    console.log(`Error al conectarsee a la BBDD ${error}`)
})














//ruta de prueba
//req: request
//res: response

//definicion de rutas
// app.get("/",(req,res)=>{
//     res.send("mensaje desde el backend con nodemon")

// })

// const port=3000;

// let usuarios=[
//     {id:1, nombre:"diana", email:"diana@gmail.com"},
//     {id:2, nombre:"lina", email:"lina@gmail.com"},
//     {id:3, nombre:"andres", email:"andres@gmail.com"}
// ]



// //ruta para obtener todos los usuarios de la api
// app.get("/usuarios/todos", (req,res)=>{
//     res.json(usuarios)
// })



// //ruta para obtener un usuario especifico
// app.get("/usuarios/buscar/:id",(req,res)=>{
//     const id=parseInt(req.params.id);//convierte el tipo de id a numero
//     //console.log(typeof(id))
//     const usuario=usuarios.find(user=>user.id===id)//para encontrar usuario por el id
//     //console.log(usuario)

// if(!usuario){
//     return res.status(404).json({
//         mensaje:"Usuario no encontrado"
//     })
// }

//     res.json(usuario)
    
// })


// //ruta para crear un nuevo usuario
// app.post("/usuarios/crear", (req,res)=>{
//     const {nombre, email}=req.body; //desestructuring
//     const nuevoUsuario={
//         id:usuarios.length+1,
//         nombre:nombre,
//         email:email,
//     }
//     usuarios.push(nuevoUsuario)
//     //console.log(nuevoUsuario)
//     res.status(201).json({
//         mensaje: "usuario creado correctamente"
//     })
//     //console.log(nombre)
    
// })


// //ruta para modificar o actualizar un usuario, el .put es para modificacion o actualizacion de datos del usuario
// app.put("/usuarios/modificar/:id", (req, res)=>{   
//     const id =parseInt(req.params.id);
//     const {nuevoNombre}=req.body;
//     const usuario=usuarios.find(user=> user.id===id);
//     //console.log(usuario.nombre)//verificar el nombre actual
//     const nombreActual=usuario.nombre//lina
//     usuario.nombre=nuevoNombre//modificacion

//     res.status(214).json({
//         mensaje: `el usuario anterior era ${nombreActual}, el nuevo nombre es ${nuevoNombre}`,
//         datos:usuario
//     })
// })


// //ruta para eliminar un usuario
// app.delete("/usuarios/eliminar/:id", (req,res)=>{

//     //ontener el id del usuario por params de la url
//     const id=parseInt(req.params.id);

//     //buscar en la lista de usuarios el id que corresponda y recuperamos el indice
//     //   array=[10,20,5, 8]
//     //posicion  0, 1, 2, 3
//     const indice = usuarios.findIndex(user=>user.id===id);
//     //console.log(indice)
//     //en caso de no encontrar el usuario a eliminar
//     if(indice===-1){
//         res.status(404).json({
//             mensaje:`usuario no encontrado`
//         })
//     }
//     //dado que es una lista, eliminamos el usuario con el indice encontrado
//     usuarios.splice(indice,1)
//     res.status(201).json({
//         mensaje:`usuario ${id} eliminado correctamente`
//     })
// });











