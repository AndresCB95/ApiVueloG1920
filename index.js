const express = require("express")
const cors = require("cors")
const body_parser = require("body-parser")
const vueloService = require("./VueloService.js")

const app = express()
const path =  "/vuelos"
const portvuelos = 8081

app.use(cors())
app.use(body_parser.json())

app.get(path ,
    async (request, response)=>{
        console.log("llego peticion")
        const lista = await vueloService.getVuelos()
        response.send(lista)
    }
)


app.listen(portvuelos,
    ()=>{
        console.log("Subio api vuelo en el puerto"+portvuelos)
    }
)

