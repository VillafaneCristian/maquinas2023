const express = require ('express');
const path = require ('path');
const app = express();



//definimos rutas
app.get ('/',function(req,res){
    const indexPath = path.resolve(__dirname,'./views/home.html');
    res.sendFile(indexPath);
});


//levantamos el servidor en el puerto 3000
app.listen(3000,()=>console.log('Servidor corriendo en el puerto 3000'));

