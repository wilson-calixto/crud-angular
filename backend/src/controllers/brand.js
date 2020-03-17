const { BrandsDAO } = require('../models/brand');
const mongodb = require('mongodb');

/*This class implements methods to structure the body of the responses and to make validations before requesting data from the database*/

class BrandsCtrl {
    
    static async getBrands(req, res, next){
        try{
            let brands = await BrandsDAO.getBrandsFromDb();
            res.status(200).json(brands);
        }catch (e){
            res.status(500).json({ error: e });
        }
    }
     
    static async addBrand(req, res, next){
        try{
            console.log('addbrand',req.body.name)
            const brand = { name: req.body.name };
            const modelResponse = await BrandsDAO.addBrandFromDb(brand);
            res.status(200).json(modelResponse.ops[0]);
        }catch (e){
            res.status(500).json({ e })
        }
    }
    
    static async updateBrand(req, res, next){
        try{
            const brand = {id: req.params.id, name: req.body.name}
            const modelRsponse = await BrandsDAO.updateBrandFromDb(brand);
            res.status(200).json({success: true});
        }catch(e){
            res.status(500).json({ e })
        }
    }
    
    static async deleteBrands(req, res, next){
        try{
            let brandsToRemove = req.body.map(brand => ({deleteOne: {filter: {_id: new mongodb.ObjectID(brand.id)}}}));
            const brandResponse = await BrandsDAO.deleteBrandsFromDb(brandsToRemove);
            res.status(200).json({success: true});
        }catch (e){
            res.status(500).json({ e })
        }
    }
    
}


module.exports = { BrandsCtrl: BrandsCtrl };