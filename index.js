const express = require("express")
const cors = require("cors")
const body_parser = require("body-parser")

const app = express()
const path =  "/vuelos"
const portvuelos = 8081
//const portcliente = 8082
//const portpago = 8083
//const portreserva = 8084

app.use(cors())
app.use(body_parser.json())

app.get(path ,
    (request, response)=>{
        console.log("llego peticion")
        console.log(request)

        response.send("Hola mundo")
    }
)


app.listen(portvuelos,
    ()=>{
        console.log("Subio api vuelo en el puerto"+port)
    }
)

