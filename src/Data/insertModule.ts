import connection from "./connection";


const insertModule = async (id: string, module: string ): Promise<any> => {
     const result = await connection("LabeSystem_Turmas")
     .update({module: module})
     .where({id: id}) 


     return result
}

export default insertModule



