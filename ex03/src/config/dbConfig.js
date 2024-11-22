import { MongoClient } from 'mongodb';

export default async function conectarBanco(stringConexao) {
    let moontoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('conectando ao cluster...');
        await mongoClient.connect();
        console.log('conectado ao Mongo Atlas');

        return mongoClient;
    } catch (erro) {
        console.error('falha na conexão, erro');
        process.exit();
    }
}