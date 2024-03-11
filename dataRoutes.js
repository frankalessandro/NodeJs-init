const express = require("express")
const app = express()
const controller = require("./controller.js")

app.get("/", (req, res) => {
    res.send("hola esta es la ruta raiz")
})