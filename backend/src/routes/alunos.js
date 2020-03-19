var express = require("express")
var router = express.Router()
const { AlunosCtrl } = require('../controllers/alunos');
const { AlunosDao } = require('../models/alunos');

var alunosCtrl=new AlunosCtrl()
/* Route to add a new model */
router.post('/', function (req, res, next) {
    alunosCtrl.addRegistro(req, res, next);
});

/* Route to get all models */
router.get('/', function (req, res, next) {
    alunosCtrl.getRegistros(req, res, next);
});

/* Route to update one model */
router.put('/:id', function (req, res, next) {
    alunosCtrl.updateRegistro(req, res, next);
});


/* Route to delete one model */

router.delete('/', function (req, res, next) {
    alunosCtrl.deleteRegistros(req, res, next);
});

module.exports = router;