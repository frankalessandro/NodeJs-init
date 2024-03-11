const express = require("express")
const router = express.Router()
const app = express()
const controller = require("./controller.js")

router.get("/", controller.saludo)

module.exports = router