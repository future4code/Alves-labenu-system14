import { docente } from "../type/turma";
import connection from "./connection";

const createDocente = async (name: string, email: string, data_nasc: string, turma_id: string): Promise<void> => {
    const id = Date.now() % 10000
    const newId = id.toString()
    const newDate = data_nasc.split("/").reverse().join("-")

    const newDocente: docente = {
        id: newId,
        name: name,
        email: email,
        data_nasc: newDate,
        turma_id: turma_id
    }

    await connection("LabeSystem_Docente")
    .insert(newDocente)
    .into("LabeSystem_Docente")

}

export default createDocente