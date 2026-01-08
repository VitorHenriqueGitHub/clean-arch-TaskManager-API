// src/server.ts
import express from 'express';
import { TaskController } from './controllers/task.controller';

const app = express();
const port = 3000;

app.use(express.json());

const taskController = new TaskController();

// Definição das Rotas
app.post('/tasks', (req, res) => taskController.create(req, res));
app.get('/tasks', (req, res) => taskController.list(req, res));
app.put('/tasks/:id', (req, res) => taskController.update(req, res));
app.delete('/tasks/:id', (req, res) => taskController.delete(req, res));

app.listen(port, () => {
  console.log(`🚀 Servidor roando profissionalmente em http://localhost:${port}`);
});