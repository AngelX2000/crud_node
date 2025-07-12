require("dotenv").config()//cargamos variables de entorno
const {   Sequelize   } =require("sequelize");
// sequelize es un ORM: object relation mapping


//instanciamos un objeto de tipo sequelize
const sequelize= new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:'postgres'

    }
);
module.exports=sequelize;