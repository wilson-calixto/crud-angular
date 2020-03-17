const { TestLogDAO } = require('../models/test-log');
const mongodb = require('mongodb');

class TestLogCtrl {
    
     static async getTestLogs(req, res, next){
        try{
            let testLogs = await TestLogDAO.getTestLogsFromDb();
            console.log(testLogs.length);
            res.status(200).json(testLogs);
        }catch (e){
            res.status(500).json({ error: e });
        }
    }
     
    static async addTestLog(testLog){
        try{
            testLog['testConfigId'] = new mongodb.ObjectID(testLog['testConfigId']);
            const testLogResponse = await TestLogDAO.addTestLogFromDb(testLog);
            return { success: true, id: testLogResponse.ops[0] }
        }catch (e){
            return { success: false, id: null }
        }
    }
}

module.exports = {TestLogCtrl: TestLogCtrl}