const pool = require("./db")

const saludo = (req, res) => {
    res.send("<h1>Hola este es un saludo</h1>")
}
const usuarios = (req, res) => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.status(200).json(results);
    });
};

module.exports = {
    saludo, usuarios
}