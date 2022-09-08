import { Request, Response } from "express"
import selectStudents from '../Data/selectStudent'

export const getStudentsByName = async (req: Request, res: Response) => {
   try {
    const byName = req.query.byName as string 

    if(!byName){
        res.statusCode = 404
        throw new Error("Você não passou o Query Params");
    }

    const response = await selectStudents(byName)

    res.status(200).send(response)

   } catch (error: any) {
    res.status( res.statusCode || 500).send({message: error.message || "Deu algum erro no servidor"})
   }
}

