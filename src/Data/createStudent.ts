import connection from "./connection";
import { student } from "../type/turma";

 const createStudent = async (name: string, email: string, data_nasc: string, turma_id: string): Promise<void> => {
        const id = Date.now() % 10000
        const newId = id.toString()
        const newDate = data_nasc.split("/").reverse().join("-")

        const newStudent: student = {
            id: newId,
            name: name,
            email: email,
            data_nasc: newDate,
            turma_id: turma_id
        }

        await connection("LabeSystem_estudante")
        .insert(newStudent)
        .into("LabeSystem_estudante")
 }


 export default createStudent
 

 