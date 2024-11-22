import fs from 'fs';
import {getTodosPosts, criarPost} from '../models/postsModel.js';

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function postarNovo(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
		const imagemAtualizada = `uploads/&{postCriado.insertedId}.png`
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({'Erro':'Falha na requisição'})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: '',
        imgUrl: req.file.originalname,
        alt: ''
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({'Erro':'Falha na requisição'})
    }
}

export async function atualizarPost(req, res) {
    const { id } = req.params;
    const { descricao, url, alt } = req.body;

    try {
        const resultado = await Post.updateOne(
            { _id: id },
            { descricao, url, alt }
        );

        if (resultado.nModified === 0) {
            return res.status(404).json({ message: 'Post não encontrado ou não foi alterado.' });
        }

        res.status(200).json({ message: 'Post atualizado com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar o post.' });
    }
}
