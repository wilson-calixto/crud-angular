const { AlunosDAO } = require ('../models/alunos')

class AlunosCtrl{

    static async addRegistro(req, res, next){
        try{
            const aluno = { nome: req.body.nome, turma: req.body.turma };
            console.log('add Registros',aluno)

            const databaseResponse = await AlunosDAO.addRegistrosFromDb(aluno);

            res.status(200).json(databaseResponse.ops[0]);
        }catch (e){
            res.status(500).json({ e })
        }
    }

    static async getRegistros(req,res,next){
        try{
            let alunos = await AlunosDAO.getRegistrosFromDb();
            res.status(200).json(alunos);
        }catch (e){
            res.status(500).json({ error: e });
        }

    }


    static async updateRegistro(req,res,next){
        try{
            // const brand = {id: req.params._id, nome: req.body.nome, turma: req.body.turma}
            const modelRsponse = await AlunosDAO.updateRegistroFromDb(req.body);
            res.status(200).json({success: true});
        }catch(e){
            res.status(500).json({ e })
        }
    }


    static async deleteRegistros(req,res,next){
        try{            

            const brandResponse = await AlunosDAO.deleteRegistrosFromDb(req.body);
            res.status(200).json({success: true});
        }catch (e){
            res.status(500).json({ e })
        }
    }
    
    
 
    
}
module.exports = {AlunosCtrl: AlunosCtrl};
