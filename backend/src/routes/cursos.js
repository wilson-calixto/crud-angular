var express = require("express")
var router = express.Router()
const { CursosCtrl } = require('../controllers/cursos');
const { CursosDAO } = require('../models/cursos');

var cursosCtrl=new CursosCtrl()

/* Route to get all models */
router.post('/', function (req, res, next) {
    cursosCtrl.addRegistro(req, res, next);
});

/* Route to get all models */
router.get('/', function (req, res, next) {
    cursosCtrl.getRegistros(req, res, next);
});

/* Route to update one model */
router.put('/:id', function (req, res, next) {
    cursosCtrl.updateRegistro(req, res, next);
});


/* Route to delete one model */

router.delete('/', function (req, res, next) {
    cursosCtrl.deleteRegistros(req, res, next);
});

module.exports = router;