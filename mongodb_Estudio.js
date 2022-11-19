const {MongoClient} = require("mongodb")

const run = async () =>{

    const url ="mongodb+srv://MisionTic:MisionTicG1920@cluster0.2w1otct.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(url)

    await client.connect()
    .then(
        
        (response)=>{
            console.log("Conexio se obtuvo exitosamente")
        }

    )
    .catch(

        (error)=>{
            console.log("Se obtuvo un erro en la conexion")
            console.log(error)
        }

    )

    const db = client.db("AerolinaG1920")

    const collection = await db.collection("vuelos")

    
    await collection.findOne({"origen":"Bogota"})
    .then(
        (documento)=>{
            console.log("FindOne")
            console.log(documento)
        }
    )
    .catch(
        (error)=>{
            console.log("Error en buscar")
            console.log(error)
        }
    )

    const resultado = collection.find({})
    
    await resultado.forEach
    (

        (documento)=>{
            console.log("Find")
            console.log(documento)
        }

    )


    /*await collection.updateMany(

        {"destino":"Medellin"},
        {"$set":{"tags":["primavera"]},"$inc":{"sillas.0.sillas":-12}}

    )
    .then(
        (resultado)=>{
            console.log(resultado)
            console.log("Actualización exitosa")
        }
    )
    .catch(

        (errorenresultado)=>{
            console.log(errorenresultado)
            console.log("Error")
        }

    )*/

    /*await collection.updateOne(
        {"destino":"Medellin"},
        {"$set":{"tags":["primavera"]},"$inc":{"sillas.0.sillas":12}}
    ).then(
        (resultado)=>{
            console.log(resultado)
            console.log("Actualización exitosa")
        }
    )
    .catch(

        (errorenresultado)=>{
            console.log(errorenresultado)
            console.log("Error")
        }

    )*/

   /* await collection.insertMany(
        [
            {
                "_id":"BM05",
                "origen": "Bogotá",
                "destino": "Medellin",
                "fecha": "2022-11-13 11:00:00",
                "sillas": [
                  {
                    "_id": "01",
                    "nombre": "economicas",
                    "sillas": 100,
                    "preciounidad": 100000
                  },
                  {
                    "_id": "02",
                    "nombre": "ejecutiva",
                    "sillas": 100,
                    "preciounidad": 500000
                  }
                ],
                "tags": [
                  "primavera"
                ],
                "tag": [
                  "primavera"
                ]
              }
         
            ]
        )
        .then(
            (resultado)=>{
                console.log(resultado)
                console.log("Insercion exitosa")
            }
        )
        .catch(
            (error)=>{
                console.log(resultado)
                console.log("Insercion NO exitosa")
            }
        )*/

    /*await collection.insertOne(

        {
            "_id":"BM08",
            "origen": "Bogotá",
            "destino": "Medellin",
            "fecha": "2022-11-13 11:00:00",
            "sillas": [
              {
                "_id": "01",
                "nombre": "economicas",
                "sillas": 100,
                "preciounidad": 100000
              },
              {
                "_id": "02",
                "nombre": "ejecutiva",
                "sillas": 100,
                "preciounidad": 500000
              }
            ],
            "tags": [
              "primavera"
            ],
            "tag": [
              "primavera"
            ]
          }


    )
    .then(
        (resultado)=>{
            console.log(resultado)
            console.log("Insercion exitosa")
        }
    )
    .catch(
        (error)=>{
            console.log(error)
            console.log("Insercion exitosa")
        }
    )*/

    //await collection.deleteMany()
    //await collection.deleteOne()

    await client.close()
}

run()