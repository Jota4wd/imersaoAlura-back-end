import express from "express";
import routes from "./src/routes/postsRoutes.js";
import conectarAoBanco from "./src/config/dbConfig.js";

const app = express();
app.use(express.json());

const stringConexao = process.env.STRING_CONEXAO;
conectarAoBanco(stringConexao);

routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000...");
});
