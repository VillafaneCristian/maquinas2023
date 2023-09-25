const db = require ('../database/db.js');

const usuariosServices = {

    crear: (usuario)=>{
        db.usuarios.crear(usuario);
    },

    getAllUsers: ()=>{
        return db.usuarios.findAllUsers();
    }
}

module.exports = usuariosServices;