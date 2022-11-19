const mongoVuelos = require("./mongodbvuelos.js")

const getVuelos = async ()=>{

    const client = await mongoVuelos.getClient()
    const collection = await mongoVuelos.getCollection(client)
    const listavuelos = await mongoVuelos.getFind(collection,{})
    mongoVuelos.close(client)
    return listavuelos
}


module.exports.getVuelos = getVuelos;