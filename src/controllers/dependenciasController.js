const path = require ('path');

let dependenciasController = {
    alta: function(req,res){
        //const altaIncidentePath = path.resolve(__dirname,'../views/altaDependencia.ejs');
        res.render('altaDependencia.ejs');
    }
};

module.exports = dependenciasController; 