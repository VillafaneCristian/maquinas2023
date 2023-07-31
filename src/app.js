const express = require ('express');
const path = require ('path');
const app = express();

//definimos la carpeta public como carpeta de archivos publicos.
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

//definimos rutas
app.get ('/',function(req,res){
    const indexPath = path.resolve(__dirname,'./views/home.html');
    res.sendFile(indexPath);
});

app.get('/incidentes/alta',function(req,res){
    const altaIncidentesPath = path.join(__dirname,'/views/altaIncidente.html');
    res.sendFile(altaIncidentesPath);
});

app.get('/dependencias/alta',function(req,res){
    const altaDependenciasPath = path.join(__dirname,'/views/altaDependencia.html');
    res.sendFile(altaDependenciasPath);
});


//levantamos el servidor en el puerto 3000
app.listen(3000,()=>console.log('Servidor corriendo en el puerto 3000'));

