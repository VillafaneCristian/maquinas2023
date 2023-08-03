const express = require ('express');
const path = require ('path');
const app = express();

const rutasDependencias = require ('./routes/rutasDependencias.js');
const rutasIncidentes = require ('./routes/rutasIncidentes.js')

//definimos la carpeta public como carpeta de archivos publicos.
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

//definimos rutas

app.use('/dependencias',rutasDependencias);
app.use('/incidentes',rutasIncidentes); 

/*
app.get ('/',function(req,res){
    const indexPath = path.resolve(__dirname,'./views/home.html');
    res.sendFile(indexPath);
});

app.get('/incidentes/alta',function(req,res){
    const crearIncidentesPath = path.join(__dirname,'/views/altaIncidente.html');
    res.sendFile(crearIncidentesPath);
});*/


//levantamos el servidor en el puerto 3000
app.listen(3000,()=>console.log('Servidor corriendo en el puerto 3000'));

