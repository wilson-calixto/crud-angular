const mongodb = require('mongodb');
let brandsCollection;
let brainiac;

/*This class implements communication and request methods for mongo db*/

class BrandsDAO {
    
    //This method is initialized with the application, check the 'bin/www' file for more details
    static async injectDb(conn){
        //Check whether database connection already exists 
        if(brandsCollection){
            return;
        }
        
        try{
            brainiac = await conn.db('test');
            brandsCollection = await conn.db('test').collection('brands');
            this.brandsCollection = brandsCollection;
        }catch(e){
            console.error(`Unable to establish a collection handle in brandsDAO: ${e}`);
            return { error: e }
        }
    }
    
    static async getBrandsFromDb(){
        try {
            return await brandsCollection.find({}).toArray();
        }catch(e){
            console.error(`Unable to get brand: ${e}`);
            return { error: e }
        }
    }
    
    static async updateBrandFromDb(brand){
        try{
            return await brandsCollection.updateOne(
                {_id: new mongodb.ObjectID(brand.id)}, 
                { $set: { name: brand.name } } 
            );
        }catch(e){
            console.error(`Unable to update brand: ${e}`);
            return { error: e }
        }
    }
    
    
    static async addBrandFromDb(brand){
        try{
            console.log('addBrandFromDb',brand)
            return await brandsCollection.insertOne(brand);
        }catch(e){
            console.error(`Unable to add brand: ${e}`);
            return { error: e }
        }
    }
    
    static async deleteBrandsFromDb(brands){
        try{
            const deleteResponse = await brandsCollection.bulkWrite(brands);
            return deleteResponse;
        }catch(e){
            console.error(`Unable to delete brand: ${e}`)
            return { error: e }
        }
    }
}

module.exports = { BrandsDAO: BrandsDAO };