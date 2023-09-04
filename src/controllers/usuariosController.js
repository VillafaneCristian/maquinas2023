const fs = require ('fs');
const path = require('path');

const usuariosController = {
    alta: function(req,res){
        res.render('altausuario.ejs'); 
    },
    crear: function(req,res){

        let unUsuario = {
            nombre: req.body.nombreUsuario,
            apellido: req.body.apellidoUsuario,
            email: req.body.emailUsuario,
            dependencia: req.body.dependenciaUsuario
        }


        const archivoUsuariosPath = path.join(__dirname,'../database/usuarios.json');
        let archivoUsuarios = fs.readFileSync(archivoUsuariosPath,{encoding:'utf-8'});
        let usuarios;
        if (archivoUsuarios == ""){
            usuarios=[];
        }else{
            usuarios = JSON.parse(archivoUsuarios);
        }

        usuarios.push(unUsuario);

        usuariosJSON = JSON.stringify (usuarios);

        fs.writeFileSync(archivoUsuariosPath,usuariosJSON);

        res.redirect('/incidentes/alta')
    }
}

module.exports = usuariosController;