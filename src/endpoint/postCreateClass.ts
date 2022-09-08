import { Request,Response } from "express"; 
import createClass from "../Data/createClass";

const postCreateClass = async (req: Request, res: Response) => {
 try {
    const {name, module} = req.body

    if(!name) {
     res.statusCode = 404
     throw new Error("Seu nome não foi enviado!");
    
    }

    if(typeof name !== "string" || typeof module !== "string") {
        res.statusCode = 401
        throw new Error("Seu parâmetro name, ou module não é uma string");
        
    }

    await createClass(name, module)

    res.status(201).send("Seu usuário foi criado")
 } catch (error: any) {
    res.status( res.statusCode || 500).send({message: error.message || "Deu algum erro no servidor"})
 }   
    
} 

export default postCreateClass
