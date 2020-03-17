var express = require('express');
var router = module.exports = express.Router();
const { TestLogCtrl } = require('../controllers/test-log');

/* Route to get all tests logs */
router.get('/', function (req, res, next) {
    TestLogCtrl.getTestLogs(req, res, next);
});

module.exports = router;