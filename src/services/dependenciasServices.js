const db = require ('../database/db.js');
const  dependenciasServices = {

    getAllDependencias: ()=>{
        return db.dependencias.getAllDependencias();
    },

    getDependenciaById: (id)=>{
        return db.dependencias.findById(id);
    },

    crear: (dependencia)  => {
        db.dependencias.crear(dependencia);
    }

};

module.exports = dependenciasServices;
