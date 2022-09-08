import connection from "./connection";


const selecAllDocentes = async (): Promise<any> => {
    const result = await connection("LabeSystem_Docente")
    .select("*")

    return result
}

export default selecAllDocentes