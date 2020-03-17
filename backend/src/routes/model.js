var express = require('express');
var router = module.exports = express.Router();
const { ModelsCtrl } = require('../controllers/model');

/* Route to get all models */
router.get('/', function (req, res, next) {
    ModelsCtrl.getModels(req, res, next);
});

/* Route to get model by id */
router.get('/:id', function (req, res, next) {
    ModelsCtrl.getModelById(req, res, next);
});

/* Route to add a new model */
router.post('/', function (req, res, next) {
    ModelsCtrl.addModel(req, res, next);
});

/* Route to update one model */
router.put('/update/:id', function (req, res, next) {
    ModelsCtrl.updateModel(req, res, next);
});

/* Route to delete one model */
router.delete('/delete', function (req, res, next) {
    ModelsCtrl.deleteModel(req, res, next);
});

/* Route to get available stations */
router.get('/sendservice/stations', function (req, res, next) {
    ModelsCtrl.getStations(req, res, next);
});

/* Route to export models to a station*/
router.post('/sendservice', function (req, res, next) {
    ModelsCtrl.exportSetup(req, res, next);
});

/* Route to get available stations */
router.get('/monitorservice/stations', function (req, res, next) {
    ModelsCtrl.testsMonitor(req, res, next);
});

module.exports = router;