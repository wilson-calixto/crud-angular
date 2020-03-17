const { ModelsDAO } = require('../models/model');
const ObjectId = require('bson');
const mongodb = require('mongodb');
const { EdidFile } = require('../../utils/edid-file');
const { SetupsDAO } = require('../models/setup');
const defaultTests = require('../models/default-tests');
const defaultTopics = require('../models/default-topics');

/*This class implements methods to structure the body of the responses and to make validations before requesting data from the database*/

class ModelsCtrl {
    
    static async getModels(req, res, next){
        try{            
            let models = await ModelsDAO.getModelsFromDb();
            res.status(200).json(models);
        }catch (e){
            console.log(e);
            res.status(500).json({ error: e });
        }
    }
    
    static async getModelById(req, res, next){
        try{
            let model = await ModelsDAO.getModelByIdFromDb(req.params.id);
            let setup = await SetupsDAO.getSetupByModelFromDb(req.params.id);
            if(setup.length > 0){
                model[0]['setup'] = setup[0];
            }else{
                model[0]['setup'] = {};
                model[0]['setup']['tests'] = defaultTests;
            }
            res.status(200).json(model);
        }catch (e){
            console.log(e);
            res.status(500).json({ error: e });
        }
    }
    
    static async addModel(req, res, next){
        try{
            const model = { name: req.body.name, brand: req.body.brand, timing: req.body.timing };
            const modelResponse = await ModelsDAO.addModelFromDb(model);
            res.status(200).json(modelResponse.ops[0]);
        }catch (e){
            res.status(500).json({ e })
        }
    }
    
    static async updateModel(req, res, next){
        try{
            let model = { name: req.body.name, brand: req.body.brand, timing: req.body.timing };
            if(req.body.setup){
                let setup = { timestamp: new Date(), tests: req.body.setup.tests, model_id: new mongodb.ObjectID(req.params.id) };
                await SetupsDAO.addSetupFromDb(setup);
                if(req.body.file){
                    const fileSaved = await EdidFile.addFile(req.body._id, req.body.file);
                    if(fileSaved.success){
                        const indexEdid = model['tests'].findIndex(item => item.name === "Edid Test");
                        const indexParameter = model['tests'][indexEdid]['parameters'].findIndex(item => item.name === "File path");
                        if(indexParameter != -1){
                            model['tests'][indexEdid]['parameters'][indexParameter]['value'] = fileSaved.path;
                        }else{
                            const filePath =  { "name": "File path", "value": fileSaved.path, "type": 1 }
                            model['tests'][indexEdid]['parameters'].push(filePath);
                        }
                    }else{
                        res.status(500).json({success: false});
                        return;
                    }
                }
            }
            
            const modelRsponse = await ModelsDAO.updateModelFromDb(req.params.id, model);
            res.status(200).json({success: true});
        }catch(e){
            console.log(e);
            res.status(500).json({ e })
        }
    }
    
    static async deleteModel(req, res, next){
        try{
            let modelsToRemove = req.body.map(model => ({deleteOne: {filter: {_id: new mongodb.ObjectID(model.id)}}}));
            const modelResponse = await ModelsDAO.deleteModelFromDb(modelsToRemove);
            let modelsId = req.body.map(model => model.id);
            const removeFilesResponse = await EdidFile.removeFiles(modelsId);
            res.status(200).json({success: true});
        }catch (e){
            res.status(500).json({ e });
        }
    }
    
    static async getStations(req, res, next){
        try{
            let stationsFiltered = [];
            let lines = req.mqttClient.subscribeTopic(defaultTopics.status);
            lines.map((line) => {
                line.stations.map((station) => {
                    if(station.switch == 'ON'){
                       stationsFiltered.push({
                           id: station.id,
                           name: station.name
                       });
                    }
                });
            });
            res.status(200).json(stationsFiltered);
        }catch(e){
            console.log(e);
            res.status(500).json({ e });
        }
    }
    
    static async exportSetup(req, res, next){
        try{
            let topic = 'df/brainiac/station/'+req.body.station.id+'/sendSetup';
            let payload = { setups: req.body.models };
            
            if(req.mqttClient.publish(topic, JSON.stringify(payload), 1)){
                res.status(200).json({success: true});   
            }else{
                res.status(400).json({success: false});
            }
            
        }catch(e){
            res.status(500).json({ e });
        }
    }
    
    static async testsMonitor(req, res, next){
        try{
            let stations = await req.mqttClient.subscribeTopic(defaultTopics.status);
            req.io.emit('availableStations', {stations: stations});
            req.mqttClient.subscribeTopic(defaultTopics.stationStatus);
            res.status(200).json({success: true});
        }catch(e){
            console.log(e);
            res.status(500).json({ e });
        }
    } 
    
}


module.exports = { ModelsCtrl: ModelsCtrl };