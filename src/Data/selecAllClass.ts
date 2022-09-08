import connection from "./connection";

const selectAllClass =async (): Promise<any> => {
    
    const turmas = await connection("LabeSystem_Turmas")
    .select("*")
    .where("LabeSystem_Turmas.module",">","0")
     
  return turmas
} 

export default selectAllClass

