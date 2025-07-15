exports.Hola = (req,res)=>{
    console.log("Hola desde el controlador");
    res.send("Hola desde el controlador")   
}

exports.Libros = (req,res)=>{
    const librosURL = fetch("http://localhost:5173/")
    res.send(librosURL)
}