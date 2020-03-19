const mongodb = require('mongodb');
let collection
let connection
class dbConnection{
//TODO criar uma classe pai
    //This method is initialized with the application, check the 'bin/www' file for more details
    static async saveConnection(conn,databaseName='test',collectionName='cursos'){
        connection=await conn.db(databaseName)
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

    static async getConnection(){
        return connection
    }
    static async getC(){
        return collection;
    }
    
    static async getCollection(collectionName){
        return connection.collection(collectionName);
    }
}

module.exports = { dbConnection: dbConnection }