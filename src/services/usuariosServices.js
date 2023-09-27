const db = require ('../database/db.js');
const { findById } = require('../database/dependencias/dependencias.js');

const usuariosServices = {

    crear: (usuario)=>{
        db.usuarios.crear(usuario);
    },

    getAllUsers: ()=>{
        return db.usuarios.findAllUsers();
    },

    getUserById: (id)=>{
        const usertoEdit = db.usuarios.findUserById(id);
        return usertoEdit;
    } 
}

module.exports = usuariosServices;