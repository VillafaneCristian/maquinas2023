const db = require ('../database/db.js');

const usuariosServices = {

    crear: (usuario)=>{
        db.usuarios.crear(usuario);
    }
}

module.exports = usuariosServices;