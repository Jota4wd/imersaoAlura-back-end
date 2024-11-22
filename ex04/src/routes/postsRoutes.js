import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovo, uploadImagem, atualizarPost } from '../controllers/postsController.js';

// trecho de codigo para windows
/*
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ dest: './uploads, storage });
*/

const upload = multer({ dest: './upload' });

const routes = (app) => {
  app.use(express.json());
  app.get('/posts', listarPosts);
  app.post('/posts', postarNovo);
  app.post('/upload', upload.single('imagem'), uploadImagem);
  app.put('/posts/:id', atualizarPost);
};

export default routes;
