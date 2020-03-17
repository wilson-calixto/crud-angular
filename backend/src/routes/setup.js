var express = require('express');
var router = module.exports = express.Router();
const { SetupsCtrl } = require('../controllers/setup');

/* Route to get all setups */
router.get('/', function (req, res, next) {
    SetupsCtrl.getSetups(req, res, next);
});


/* Route to get setup by id */
router.get('/:id', function (req, res, next) {
    SetupsCtrl.getSetupById(req, res, next);
});


module.exports = router;