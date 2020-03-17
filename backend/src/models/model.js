const mongodb = require('mongodb');
let modelsCollection;
let brainiac;

/*This class implements communication and request methods for mongo db*/

class ModelsDAO {
    
    //This method is initialized with the application, check the 'bin/www' file for more details
    static async injectDb(conn){
        //Check whether database connection already exists 
        if(modelsCollection){
            return;
        }
        
        try{
            brainiac = await conn.db('test');
            modelsCollection = await conn.db('test').collection('models');
            this.modelsCollection = modelsCollection;
        }catch(e){
            console.error(`Unable to establish a collection handle in modelsDAO: ${e}`);
            return { error: e }
        }
    }
    
    static async getModelsFromDb(){
        try {
            return await modelsCollection.aggregate([
                {
                    $lookup:
                    {
                      from: 'setup',
                      let: {id: "$_id"},
                      pipeline: [
                          {$match: {$expr: {$and: [{$eq: ["$model_id", "$$id"]}]}}},
                          {$sort: {timestamp: -1}},
                          {$limit: 1},
                          {$project: {model_id: 0}}
                      ],
                      as: 'setup',
                    }
                }
            ]).toArray();
        }catch(e){
            console.error(`Unable to get model: ${e}`);
            return { error: e }
        }
    }
    
    static async getModelByIdFromDb(id){
        try {
            return await modelsCollection.find({_id: new mongodb.ObjectID(id)}).toArray();
        }catch(e){
            console.error(`Unable to get model by id: ${e}`);
            return { error: e }
        }
    }
    
    static async updateModelFromDb(id, model){
        try{
            return await modelsCollection.updateOne(
                {_id: new mongodb.ObjectID(id)}, 
                { $set: model } 
            );
        }catch(e){
            console.error(`Unable to update model: ${e}`);
            return { error: e }
        }
    }
    
    
    static async addModelFromDb(model){
        try{
            const modelDoc = { name: model.name, brand: model.brand, timing: model.timing};
            return await modelsCollection.insertOne(modelDoc);
        }catch(e){
            console.error(`Unable to add model: ${e}`);
            return { error: e }
        }
    }
    
    static async deleteModelFromDb(models){
        try{
            const deleteResponse = await modelsCollection.bulkWrite(models);
            return deleteResponse;
        }catch(e){
            console.error(`Unable to delete models: ${e}`)
            return { error: e }
        }
    }
}

module.exports = { ModelsDAO: ModelsDAO };