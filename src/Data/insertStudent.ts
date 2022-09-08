import connection from "./connection";

const insertStudent = async (id: string, turma_id: string): Promise<any> => {

    const result = await connection("LabeSystem_estudante")
    .update({turma_id: turma_id})
    .where({id: id})

    return result
}

export default insertStudent