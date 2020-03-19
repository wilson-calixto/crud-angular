const { AlunosDAO } = require ('../models/alunos')


class BaseCtrl{
    BaseDAO;
    constructor(dao){
        this.BaseDAO=dao
    }

    preparaRegistro(req){
        return  { nome: req.body.nome, turma: req.body.turma };
    }

    async addRegistro(req, res, next){
        try{

            const registro = this.preparaRegistro(req)

            const databaseResponse = await this.BaseDAO.addRegistrosFromDb(registro);

            res.status(200).json(databaseResponse.ops[0]);
        }catch (e){
            console.log('exeptiom',e)

            res.status(500).json({ e })
        }
    }

    async getRegistros(req,res,next){
        try{
            let alunos = await this.BaseDAO.getRegistrosFromDb();
            res.status(200).json(alunos);
        }catch (e){
            res.status(500).json({ error: e });
        }

    }


    async updateRegistro(req,res,next){
        try{
            // const brand = {id: req.params._id, nome: req.body.nome, turma: req.body.turma}
            const modelRsponse = await this.BaseDAO.updateRegistroFromDb(req.body);
            res.status(200).json({success: true});
        }catch(e){
            res.status(500).json({ e })
        }
    }


    async deleteRegistros(req,res,next){
        try{            

            const brandResponse = await this.BaseDAO.deleteRegistrosFromDb(req.body);
            res.status(200).json({success: true});
        }catch (e){
            res.status(500).json({ e })
        }
    }
    
    
 
    
}
module.exports = {BaseCtrl: BaseCtrl};
