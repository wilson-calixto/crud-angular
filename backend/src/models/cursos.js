const { BaseDAO } = require('../models/base-model');

class CursosDAO extends BaseDAO {
    constructor(){
        super('cursos')
    }
 
}

module.exports = { CursosDAO: CursosDAO }