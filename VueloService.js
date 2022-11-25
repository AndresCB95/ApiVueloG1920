const mongoVuelos = require("./mongodbvuelos.js")

const getVuelos = async ()=>{

    const client = await mongoVuelos.getClient()
    const collection = await mongoVuelos.getCollection(client)
    const listavuelos = await mongoVuelos.getFind(collection,{})
    mongoVuelos.close(client)
    return listavuelos
}


const setSillasDisponibles = async (sillas_update)=>{

    const client = await mongoVuelos.getClient()
    const collection = await mongoVuelos.getCollection(client)
    const filtro = {"_id":sillas_update.id_vuelo}
    const vuelo = await mongoVuelos.findOne(collection,filtro)

    console.log(sillas_update)
    console.log(vuelo)

    for(let i = 0; i  < vuelo.sillas.length; i++){
        let silla_vuelo = vuelo.sillas[i]
        if(silla_vuelo.nombre === sillas_update.categoria){
            silla_vuelo.sillas -= sillas_update.sillas
            vuelo.sillas[i] = silla_vuelo
            i = vuelo.sillas.length
        }
    }

    let update = {"$set":{"sillas":vuelo.sillas}}
    await mongoVuelos.updateVuelos(collection,filtro,update)
    const vuelo_bd = await mongoVuelos.findOne(collection,filtro)

    mongoVuelos.close(client)
    return vuelo_bd
}


module.exports.getVuelos = getVuelos;
module.exports.setSillasDisponibles = setSillasDisponibles;