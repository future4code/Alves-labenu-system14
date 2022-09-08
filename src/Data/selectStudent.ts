import connection from "./connection";


const selectStudents = async (name: string): Promise<any> => {
    const result = await connection("LabeSystem_estudante")
    .select("*")
    .where(`name`, "LIKE", `%${name}%`)
    
  return result
}

export default selectStudents