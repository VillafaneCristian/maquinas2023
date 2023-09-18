const dependencias = require ('./dependencias/dependencias.js');
const usuarios = require ('./usuarios/usuarios.js');

const db = {
    dependencias,
    usuarios,
}

module.exports = db;