import { Turma } from "../type/turma";
import connection from "./connection";

const createClass = async (name: string, module: string | null): Promise<void> => {
    const id = Date.now() % 10000
    const newId = id.toString()

    const newClass: Turma = {
        id: newId,
        name: name,
        module: module
    }

    await connection("LabeSystem_Turmas")
    .insert(newClass)
    .into("LabeSystem_Turmas")

}

export default createClass