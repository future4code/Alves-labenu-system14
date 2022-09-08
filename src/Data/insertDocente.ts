import connection from "./connection";

const InsertDocente = async (id: string,  turma_id: string): Promise<any> => {
    const result = await connection("LabeSystem_Docente")
    .update({
        turma_id: turma_id
    })
    .where({
        id: id
    })
    .into("LabeSystem_Docente")
    
    return result
}

export default InsertDocente