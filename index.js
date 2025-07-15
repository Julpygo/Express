const express = require("express")
const proyectoRoutes = require("./routes/routes.proyecto")
const librosRoutes = require("./routes/routes.libros")

const app = express()
const PORT = 3006

app.set("port",PORT)

app.get("/",(req,res)=>{
    console.log("Hola mundo")
    res.send("Hola mundo")
})

app.use("/api/proyectos/",proyectoRoutes)
app.use("/api/libros/",librosRoutes)

app.listen(PORT,()=>{
    console.log(`Escuchando el puerto ${PORT}`)
})