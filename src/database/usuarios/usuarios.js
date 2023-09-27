const path = require ('path');
const fs = require ('fs'); 
const {v4: uuidv4}= require ('uuid');

const usuarios = {

    getAllUsuarios: function(){
        const archivoUsuariosPath = path.join(__dirname,'/usuariosDataBase.json');
        return JSON.parse(fs.readFileSync(archivoUsuariosPath,'utf-8'));
    },

    guardarUsuario: function(usuarios){
        const archivoUsuariosPath = path.join(__dirname,'/usuariosDataBase.json');
        fs.writeFileSync(archivoUsuariosPath,JSON.stringify(usuarios,null,2));
    },

    findAllUsers: function(){
        return this.getAllUsuarios();
    },

    findUserById: function(id){
        const usuarios = this.getAllUsuarios();
        const usuario = usuarios.find((usuario)=>usuario.id == id);
        return usuario;
    },

    crear: function(usuario) {
    //obtener todos los productos en una variable
    const usuarios = this.getAllUsuarios();
    //creo un usuario nuevo con un od usando uuid
    const unUsuario = {
        id: uuidv4(),
        ...usuario,
    };
    //puseo el usuario nuevo
    usuarios.push(unUsuario);
    //guardo el array de usuarios sobreescribiendo el anterior
    this.guardarUsuario(usuarios);
    }
}

module.exports = usuarios;