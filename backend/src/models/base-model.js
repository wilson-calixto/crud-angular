const mongodb = require('mongodb');

const { dbConnection } = require('../models/database');

let collection;
class BaseDAO{
//TODO criar uma classe pai
    collection;
    collectionName
    constructor(collectionName='cursos'){

        this.collectionName=collectionName
        console.log('this.collectionName',this.collectionName)
        this.collection=dbConnection.getCollection(this.collectionName)
    }

    
    async addRegistrosFromDb(registro){
        try{
            console.log('addRegistrosFromDb',registro)
            const collection = await dbConnection.getCollection(this.collectionName)

            return await collection.insertOne(registro);
        }catch(e){
            console.error(`Unable to add registry: ${e}`);
            return { error: e }
        }
    }

    async getRegistrosFromDb(){
        try {
            const collection = await dbConnection.getCollection(this.collectionName)

            return await collection.find({}).toArray();
        }catch(e){
            console.error(`Unable to get registry: ${e}`);
            return { error: e }
        }
    }

    async updateRegistroFromDb(registro){
        console.log('registro',registro)
        try{
            const collection = await dbConnection.getCollection(this.collectionName)

            return await collection.updateOne(
                {_id: new mongodb.ObjectID(registro._id)}, 
                { $set: { nome: registro.nome, turma: registro.turma } } 
            );
        }catch(e){
            console.error(`Unable to update brand: ${e}`);
            return { error: e }
        }
    }
    
    async deleteRegistrosFromDb(registros){
        try{
            let registrosARemover = registros.map(
                registro =>            
                    ({deleteOne: {filter: {_id: new mongodb.ObjectID(registro._id)}}})
                );
                const collection = await dbConnection.getCollection(this.collectionName)
            const deleteResponse = await collection.bulkWrite(registrosARemover);
            return deleteResponse;
        }catch(e){
            console.error(`Unable to delete brand: ${e}`)
            return { error: e }
        }
    }
    
 
}

module.exports = { BaseDAO: BaseDAO }