const fs = require ('fs');
const path = require('path');
const usuariosServices = require ('../services/usuariosServices.js');

const usuariosController = {
    alta: function(req,res){
        res.render('usuarios/altausuario.ejs'); 
    },
    crear: function(req,res){
        //recibir la informacion desde el formulario y almacenarla en uan variable
        const usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            dependencia: req.body.dependencia  
        };

        //pasarle esa variable al servicio
        usuariosServices.crear(usuario);
        //redireccionar la pagina
        res.send(usuario);
    },

    listar: function (req,res){
        const usuarios = usuariosServices.getAllUsers();
        res.render('usuarios/listarUsuarios.ejs', {usuarios:usuarios}); 
    },

    editar: function (req,res){
        const id = req.params.id;
        const userToEdit = usuariosServices.getUserById(id);
        res.render('usuarios/editarUsuario.ejs',{userToEdit:userToEdit});
    }
}

module.exports = usuariosController;