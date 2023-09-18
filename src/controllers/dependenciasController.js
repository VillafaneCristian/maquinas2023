const dependenciasServicios = require ('../services/dependenciasServices.js');


let dependenciasController = {
    alta: function(req,res){
        //const altaIncidentePath = path.resolve(__dirname,'../views/altaDependencia.ejs');
        res.render('altaDependencia.ejs');
    },
    crear: function(req,res){
       const dependencia = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        piso: req.body.piso, 
        lado: req.body.lado,
       };
       dependenciasServicios.crear(dependencia);
       res.redirect('/usuarios/alta');
    },
    listar: function(req,res){
        const dependencias = dependenciasServicios.getAllDependencias();
        res.render('listarDependencias.ejs',{dependencias});
    },
    
    editar: function (req,res){
        const id = req.params.id;
        const dependencia = dependenciasServicios.getDependenciaById(id);
        res.render('edicionDependencia.ejs',{dependencia});
    },
    actualizar: function(req,res){
        const dependencia = req.body;
        const id = req.params.id;
        dependenciasServicios.update(id,dependencia);
        res.redirect('/dependencias/listar');
    }    
}


module.exports = dependenciasController; 