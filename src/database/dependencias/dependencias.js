const fs = require ('fs');
const path = require ('path');
const {v4: uuidv4} = require ('uuid');


module.exports = {

    getAllDependencias: function(){
        const archivoDependenciasPath = path.join(__dirname,'/dependenciasDataBase.json');
        return JSON.parse(fs.readFileSync(archivoDependenciasPath,'utf-8'));
    },

    findById: function(id){
        const dependencia = this.getAllDependencias().find((dependencia)=> dependencia.id == id);
        return dependencia; 
    },

    saveDependencia: function(dependencias){
        const archivoDependenciasPath = path.join(__dirname,'/dependenciasDataBase.json');
        fs.writeFileSync(archivoDependenciasPath,JSON.stringify(dependencias,null,2));
    },

    crear: function(dependencia){
    //obtener todos las dependencias
    const dependencias = this.getAllDependencias();
    //creo una nueva dependencia
    const unaDependencia = {
        id: uuidv4(),
        ...dependencia,
    };
    //agrego la nueva dependenia al array
    dependencias.push(unaDependencia);
    //guardo el nuevo arrary en el archivo
    this.saveDependencia(dependencias);
    },
    update: function(id,dependencia){
        const dependencias = this.getAllDependencias();
        const dependenciaAEditar = dependencias.find((dependencia)=>id==dependencia.id); 
        Object.assign(dependenciaAEditar,dependencia);
        this.saveDependencia(dependencias);
    }

};
