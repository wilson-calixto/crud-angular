const mongodb = require('mongodb');

let collection;
const collectionName = 'alunos'
class AlunosDAO{
//TODO criar uma classe pai
    
    //This method is initialized with the application, check the 'bin/www' file for more details
    static async injectDb(conn,databaseName='test'){
        //Check whether database connection already exists 
        if(collection){
            return;
        }
        
        try{
            collection = await conn.db(databaseName).collection(collectionName);
        }catch(e){
            console.error(`Unable to establish a collection : ${e}`);
            return { error: e }
        }
    }

    static async addRegistrosFromDb(registro){
        try{
            console.log('addRegistrosFromDb',registro)
            return await collection.insertOne(registro);
        }catch(e){
            console.error(`Unable to add registry: ${e}`);
            return { error: e }
        }
    }

    static async getRegistrosFromDb(){
        try {
            return await collection.find({}).toArray();
        }catch(e){
            console.error(`Unable to get registry: ${e}`);
            return { error: e }
        }
    }

    static async updateRegistroFromDb(registro){
        console.log('registro',registro)
        try{
            return await collection.updateOne(
                {_id: new mongodb.ObjectID(registro._id)}, 
                { $set: { nome: registro.nome, turma: registro.turma } } 
            );
        }catch(e){
            console.error(`Unable to update brand: ${e}`);
            return { error: e }
        }
    }
    
    static async deleteRegistrosFromDb(registros){
        try{
            let registrosARemover = registros.map(
                registro =>            
                    ({deleteOne: {filter: {_id: new mongodb.ObjectID(registro._id)}}})
                );
            const deleteResponse = await collection.bulkWrite(registrosARemover);
            return deleteResponse;
        }catch(e){
            console.error(`Unable to delete brand: ${e}`)
            return { error: e }
        }
    }
    
 
}

module.exports = { AlunosDAO: AlunosDAO }