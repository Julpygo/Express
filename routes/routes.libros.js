const express = require("express")
const proyectoControllers = require("../controllers/Controllers.proyectos")

const router = express.Router()

router.get("/",proyectoControllers.Libros)

module.exports = router