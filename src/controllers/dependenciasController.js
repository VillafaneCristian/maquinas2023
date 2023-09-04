const path = require ('path');
const fs = require ('fs');


let dependenciasController = {
    alta: function(req,res){
        //const altaIncidentePath = path.resolve(__dirname,'../views/altaDependencia.ejs');
        res.render('altaDependencia.ejs');
    },
    crear: function(req,res){
        let unaDependencia = {
            codigoDependencia: req.body.codigoDependencia,
            dependencia: req.body.dependencia,
            ubicacion: req.body.piso + ', lado ' + req.body.lado
        }

       const archivoDependenciasPath = path.join(__dirname,'../database/dependencias.json'); 
       let archivoDependencias = fs.readFileSync (archivoDependenciasPath,{encoding:'utf-8'});
       let dependencias;
       if (archivoDependencias == ""){
            dependencias = [];
       }else{
            dependencias = JSON.parse(archivoDependencias);
       }

       dependencias.push(unaDependencia);
        
       let dependenciasJSON = JSON.stringify(dependencias);
       
       fs.writeFileSync(archivoDependenciasPath,dependenciasJSON);
       
       res.redirect('/usuarios/alta');
    }
}


module.exports = dependenciasController; 