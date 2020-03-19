const { BaseDAO } = require('../models/base-model');

class AlunosDAO extends BaseDAO {
    constructor(){
        super('alunos')
    }
 
}

module.exports = { AlunosDAO: AlunosDAO }