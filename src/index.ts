import app from "./app";
import getPoing from "./endpoint/getPoing";
import postCreateClass from './endpoint/postCreateClass'
import postCreateStudent from "./endpoint/postCreateStudent";
import postCreateDocente from './endpoint/postCreateDocente'
import getAllClass from './endpoint/getAllClass'
import { getStudentsByName } from './endpoint/getStudentsByName'
import getAllDocentes from "./endpoint/getAllDocentes";
import putClassModule from './endpoint/putClassModule'
import putClassStudent from "./endpoint/putClassStudent";
import { putClassDocente } from "./endpoint/putClassDocente";

// GET 
app.get("/poing", getPoing)
app.get("/class", getAllClass)
app.get("/student", getStudentsByName)
app.get("/docente", getAllDocentes)


// POST
app.post("/class", postCreateClass)
app.post("/student",postCreateStudent)
app.post("/docente", postCreateDocente)

// PUT
app.put("/class/:id", putClassModule)
app.put("/student/:id", putClassStudent)
app.put("/docente/:id", putClassDocente)