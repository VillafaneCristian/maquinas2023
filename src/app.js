const express = require ('express');
const path = require ('path');
const app = express();

const rutasDependencias = require ('./routes/rutasDependencias.js');
const rutasIncidentes = require ('./routes/rutasIncidentes.js')


//definimos la carpeta public como carpeta de archivos publicos.
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath));

//configuracion la app para que capture lo que llega a traves de un formulario y lo convierta a json
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//seteo de ejs como motor de plantillas
const viewsPath = path.join(__dirname,'/views');
app.set('view engine','ejs');
app.set('views',viewsPath);//le indico donde esta la carpeta views ya que no esta en la ubicacion por defecto que es la raiz del proyecto


//definimos rutas
app.use('/dependencias',rutasDependencias);
app.use('/incidentes',rutasIncidentes); 

//configuracion de la pagina que se va a mostrar cuando ocurra un error 404
app.use((req, res, next) => {
    res.status(404).render('not-found.ejs');
});

//levantamos el servidor en el puerto 3000
app.listen(3000,()=>console.log('Servidor corriendo en el puerto 3000'));

