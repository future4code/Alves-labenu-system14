import { Request,Response } from "express"; 
import createStudent from "../Data/createStudent";


const postCreateStudent = async (req: Request, res: Response) => {
    try {
        const {name, email, data_nasc, turma_id} = req.body

        if(!name || !email || !data_nasc) {
           res.statusCode = 404
           throw new Error("Você talvez não tenha passado, nome ou email, data_nasc");
        }

        if(!turma_id) {
            res.statusCode = 404
            throw new Error("Ou a turma que você adicionou esse Id não foi encontrada ou você não colocou");
            
        }

        if(typeof name !== "string" || typeof email !== "string" || typeof data_nasc !== "string" || typeof turma_id !== "string") {
            res.statusCode = 404
            throw new Error("Seus dados não foram enviados corretamente ou não typados como string");
            
        }

        await createStudent(name, email, data_nasc, turma_id)

        res.status(201).send("Seu estudante foi cadastrado na turma")
        
    } catch (error: any) {
        res.status( res.statusCode || 500).send({message: error.message || "Deu algum erro no servidor"})
    }
}

export default postCreateStudent