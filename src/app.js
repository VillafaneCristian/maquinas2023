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


//levantamos el servidor en el puerto 3000
app.listen(3000,()=>console.log('Servidor corriendo en el puerto 3000'));

