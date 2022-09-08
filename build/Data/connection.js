"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = (0, knex_1.default)({
    client: "mysql",
    //Nosso cliente é o mysql
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        // Nosso nome de usuário no banco de dados.
        password: process.env.DB_PASSWORD,
        // É a senha que foi enviado para nos.
        database: process.env.DB_SCHEMA,
        // Data-base que foi enviado para mim, mesmo nome do user.
        multipleStatements: true
    }
    // Nossa informação de host é aquela que recebemos do banco de dados.
});
exports.default = connection;
