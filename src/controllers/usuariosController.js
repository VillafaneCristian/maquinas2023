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
    }
}

module.exports = usuariosController;