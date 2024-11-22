import conectarBanco from "../config/dbConfig.js";

const conexao = await conectarBanco(process.env.STRING_CONEXAO);

export default async function getUsers() {
    const db = conexao.db('imersao_alura');
    const colecao = db.collection('users');
    return colecao.find().toArray()
}
