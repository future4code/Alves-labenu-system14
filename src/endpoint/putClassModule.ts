import { Request, Response } from "express";
import insertModule from "../Data/insertModule";

const putClassModule = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const module = req.body.module as string 

        if(!id) {
            res.statusCode = 404
            throw new Error("Você não passou o id");
            
        }
        
        if(!module) {
            res.statusCode = 404
            throw new Error("Você não passou seu Module!")
        }

        await insertModule(id, module)

        res.status(201).send("Sua turma foi atualizada!")



    } catch (error: any) {
        res.status( res.statusCode || 500).send({message: error.message || "Deu algum erro no servidor"})
    }
}

export default putClassModule