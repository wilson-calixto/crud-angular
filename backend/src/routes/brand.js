var express = require('express');
var router = express.Router();
const { BrandsCtrl } = require('../controllers/brand');

/* Route to get all models */
router.get('/', function (req, res, next) {
    BrandsCtrl.getBrands(req, res, next);
});

/* Route to add a new model */
router.post('/', function (req, res, next) {
    BrandsCtrl.addBrand(req, res, next);
});

/* Route to update one model */
router.put('/update/:id', function (req, res, next) {
    BrandsCtrl.updateBrand(req, res, next);
});

/* Route to delete one model */
router.delete('/delete/', function (req, res, next) {
    BrandsCtrl.deleteBrands(req, res, next);
});

module.exports = router;