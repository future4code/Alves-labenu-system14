export type Turma = {
    id: string,
    name: string,
    module: string | null
}

export type student = {
    id: string,
    name: string,
    email: string,
    data_nasc: Date|string,
    turma_id:string

}

export type docente = {
    id: string,
    name: string,
    email: string,
    data_nasc: Date|string,
    turma_id:string
}