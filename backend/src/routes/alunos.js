var express = require("express")
var router = express.Router()
const { AlunosCtrl } = require('../controllers/alunos');



/* Route to add a new model */
router.post('/', function (req, res, next) {
    AlunosCtrl.addRegistro(req, res, next);
});

/* Route to get all models */
router.get('/', function (req, res, next) {
    AlunosCtrl.getRegistros(req, res, next);
});

/* Route to update one model */
router.put('/:id', function (req, res, next) {
    AlunosCtrl.updateRegistro(req, res, next);
});


/* Route to delete one model */

router.delete('/', function (req, res, next) {
    AlunosCtrl.deleteRegistros(req, res, next);
});

module.exports = router;