const mongodb = require('mongodb');
let setupCollection;
let brainiac;

class SetupsDAO{
    
    //This method is initialized with the application, check the 'bin/www' file for more details
    static async injectDb(conn){
        
        //Check whether database connection already exists 
        if(setupCollection){
            return;
        }
        
        try{
            brainiac = await conn.db('test');
            setupCollection = await conn.db('test').collection('setup');
            this.setupCollection = setupCollection;
        }catch(e){
            console.error(`Unable to establish a collection handle in SetupDAO: ${e}`);
            return { error: e }
        }
    }
    
    static async getSetupsFromDb(){
        try {
            return await setupCollection.find({}).toArray();
        }catch(e){
            console.error(`Unable to get setups: ${e}`);
            return { error: e }
        }
    }
    
    static async getSetupByModelFromDb(modelId){
        try{
            return await setupCollection.find({ model_id: new mongodb.ObjectID(modelId)}).sort({"timestamp": -1}).limit(1).toArray();
        }catch(e){
            console.error(`Unable to get setup by model: ${e}`);
            return { error: e }
        }
    }
    
    static async getSetupByIdFromDb(id){
        try{
            return await setupCollection.find({_id: new mongodb.ObjectID(id)}).toArray();
        }catch(e){
            console.error(`Unable to get setup by id: ${e}`);
            return { error: e }
        }
    }
    
    static async addSetupFromDb(setup){
        try{
            return await setupCollection.insertOne(setup);
        }catch(e){
            console.error(`Unable to add test log: ${e}`);
            return { error: e }
        }
    }
}

module.exports = { SetupsDAO: SetupsDAO };