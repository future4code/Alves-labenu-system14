import { Request, Response } from "express";
import selecAllDocentes from "../Data/selectAllDocentes";

const getAllDocentes =async (req: Request, res: Response) => {

    try {
        const docentes = await selecAllDocentes()

    if(!docentes) {
        res.statusCode = 404
        throw new Error("Não Existe professores cadastrados, busque imediatamente indicações, Likedin!");
    }

     res.status(200).send(docentes)

    } catch (error: any) {
            res.status( res.statusCode || 500).send({message: error.message || "Deu algum erro no servidor"})
    }
    
}

export default getAllDocentes