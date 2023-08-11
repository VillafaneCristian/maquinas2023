const path = require ('path');
const fs = require ('fs');
const {validationResult} = require ('express-validator'); 

let dependenciasController = {
    alta: function(req,res){
        //const altaIncidentePath = path.resolve(__dirname,'../views/altaDependencia.ejs');
        res.render('altaDependencia.ejs');
    },
    crear: function(req,res){
        let errors = validationResult(req);
        if (errors.isEmpty){
        /*let dependenciaACrear = {
            codigoDependencia: req.body.codigoDependencia,
            dependencia: req.body.dependencia,
            ubicacion: req.body.ubicacion
        }
        const ubicacionArchivo = path.join(__dirname,'../database/dependencias.json');
        let archivoDependencias = fs.readFileSync(ubicacionArchivo, {encoding: 'utf-8'}); 
        let dependencias;
        if (archivoDependencias == ""){
            dependencias=[];
        }else{
            dependencias = JSON.parse(archivoDependencias);
        }

        dependencias.push(dependenciaACrear); 

        let dependenciasJSON = JSON.stringify(dependencias); 

        fs.writeFileSync(ubicacionArchivo,dependenciasJSON);

        console.log(dependenciaACrear);
        
        res.redirect('/incidentes/alta');*/

        }

        res.send(errors);
    }
};

module.exports = dependenciasController; 