import { Request, Response } from "express"

const getPoing = async (req:Request , res:Response ) => {
    res.send("Servidor Funcionando")
}

export default getPoing