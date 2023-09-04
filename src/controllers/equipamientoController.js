const fs = require ('fs');
const path = require ('path');

const equipamientoController = {

    alta: function(req,res){
        res.render('altaEquipamiento.ejs');
    },

    asignacion: function (req,res){
        res.render('asignacionEquipamiento.ejs');
    },
    crear: function(req,res){
        let unEquipamiento = {
            marca: req.body.marcaEquipamiento,
            modelo: req.body.modeloEquipamiento,
            tipoEquipamiento: req.body.tipoEquipamiento,
            procesador: req.body.procesadorPc,
            memoriaRam: req.body.memoriaRamPc,
            discoRigido: req.body.discoRigidoPc,
            lectograbadora: req.body.lectograbadoraPc
        }

        const archivoEquipamientoPath = path.resolve(__dirname,'../database/equipos.json');
        let archivoEquipamiento = fs.readFileSync(archivoEquipamientoPath,{encoding:'utf-8'});
        let equipos;

        if (archivoEquipamiento == ""){
            equipos = [];
        }else{
            equipos = JSON.parse(archivoEquipamiento);
        }

        equipos.push(unEquipamiento);

        let JSONequipos = JSON.stringify(equipos);

        fs.writeFileSync(archivoEquipamientoPath,JSONequipos);

        res.redirect('/incidentes/alta');
    }

}


module.exports = equipamientoController;