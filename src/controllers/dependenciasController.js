const path = require ('path');

let dependenciasController = {
    alta: function(req,res){
        const altaIncidentePath = path.resolve(__dirname,'../views/altaIncidente.html');
        res.sendFile(altaIncidentePath);
    }
};

module.exports = dependenciasController; 