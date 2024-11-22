import express from 'express';
import { listarUsers } from '../controllers/usersController.js';

const routes = (app) => {
    app.use(express.json());
    app.get("/users", listarUsers);
}

export default routes;
