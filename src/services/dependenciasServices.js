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
    },

    update: (id,dependencia) =>{
        db.dependencias.update(id,dependencia);
    }

};

module.exports = dependenciasServices;
