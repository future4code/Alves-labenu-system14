import { Request,Response } from "express";
import selectAllClass from "../Data/selecAllClass";


const getAllClass = async (req: Request, res: Response) => {
 try {

    const Class = await selectAllClass()

    if(!Class) {
        res.statusCode = 404
        throw new Error("Não existe nenhuma turma ativa");
        
    }

    res.status(200).send(Class)
    
 } catch (error: any) {
    res.status( res.statusCode || 500).send({message: error.message || "Deu algum erro no servidor"})
 }

    
}

export default getAllClass