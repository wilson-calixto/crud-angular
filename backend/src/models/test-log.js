const mongodb = require('mongodb');
let testLogCollection;
let brainiac;

class TestLogDAO{
    
    //This method is initialized with the application, check the 'bin/www' file for more details
    static async injectDb(conn){
        
        //Check whether database connection already exists 
        if(testLogCollection){
            return;
        }
        
        try{
            brainiac = await conn.db('test');
            testLogCollection = await conn.db('test').collection('testLog');
            this.testLogCollection = testLogCollection;
        }catch(e){
            console.error(`Unable to establish a collection handle in TestLogDAO: ${e}`);
            return { error: e }
        }
    }
    
    static async getTestLogsFromDb(){
        try {
            return await testLogCollection.find({}).toArray();
        }catch(e){
            console.error(`Unable to get test log: ${e}`);
            return { error: e }
        }
    }
    
    static async getTestLogByIdFromDb(id){
        try {
            return await testLogCollection.find({_id: new mongodb.ObjectID(id)}).toArray();
        }catch(e){
            console.error(`Unable to get test log by id: ${e}`);
            return { error: e }
        }
    }
    
    static async addTestLogFromDb(testLog){
        try{
            return await testLogCollection.insertOne(testLog);
        }catch(e){
            console.error(`Unable to add test log: ${e}`);
            return { error: e }
        }
    }
}

module.exports = { TestLogDAO: TestLogDAO };