import { Request, Response } from "express";
import insertStudent from "../Data/insertStudent";

const putClassStudent = async (req: Request, res: Response ) => {
try {
    const id = req.params.id
    const turma_id = req.body.turma_id as string 
    
    if(!id) {
        res.statusCode = 404
        throw new Error("Você não passou o id");
        
    }
    
    if(!turma_id) {
        res.statusCode = 404
        throw new Error("Você não passou seu Id da turma!")
    }

    await insertStudent(id, turma_id)

    res.status(201).send("O Estudante teve a turma alterada")
    
} catch (error: any) {
    res.status( res.statusCode || 500).send({message: error.message || "Deu algum erro no servidor"})
}
}

export default putClassStudent