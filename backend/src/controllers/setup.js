const { SetupsDAO } = require('../models/setup');
const mongodb = require('mongodb');

/*This class implements methods to structure the body of the responses and to make validations before requesting data from the database*/

class SetupsCtrl {
    
    static async getSetups(req, res, next){
        try{
            let setups = await SetupsDAO.getSetupsFromDb();
            console.log(setups.length);
            res.status(200).json(setups);
        }catch (e){
            console.log(e);
            res.status(500).json({ error: e });
        }
    }
    
    static async getSetupByModel(req, res, next){
        try{
            let setup = await SetupsDAO.getSetupByModelFromDb(req.params.id);
            res.status(200).json(setup);
        }catch (e){
            res.status(500).json({ error: e });
        }
    }
     
    static async getSetupById(req, res, next){
        try{
            let setup = await SetupsDAO.getSetupByModelFromDb(req.params.id);
            res.status(200).json(setup);
        }catch (e){
            res.status(500).json({ error: e });
        }
    }
}


module.exports = { SetupsCtrl: SetupsCtrl };