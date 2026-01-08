// src/controllers/task.controller.ts
import { Request, Response } from 'express';
import { TaskService } from '../services/task.service';
import { createTaskSchema, updateTaskSchema } from '../schemas/task.schema';
import { z } from 'zod';

const taskService = new TaskService();

export class TaskController {
  
  async create(req: Request, res: Response) {
    try {
      const { title } = createTaskSchema.parse(req.body);
      const newTask = await taskService.createTask(title);
      return res.status(201).json(newTask);
    } catch (error) {
      return handleErrors(error, res);
    }
  }

  async list(req: Request, res: Response) {
    const tasks = await taskService.getAllTasks();
    return res.json(tasks);
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = updateTaskSchema.parse(req.body);
      const updatedTask = await taskService.updateTask(id, data);
      return res.json(updatedTask);
    } catch (error) {
      return handleErrors(error, res);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await taskService.deleteTask(id);
      return res.status(204).send();
    } catch (error) {
      return handleErrors(error, res);
    }
  }
}

// Função auxiliar para tratar erros de forma limpa
function handleErrors(error: any, res: Response) {
  if (error instanceof z.ZodError) {
    return res.status(400).json({ errors: error.issues });
  }
  if (error.message === "TaskNotFound") {
    return res.status(404).json({ error: "Tarefa não encontrada" });
  }
  console.error(error);
  return res.status(500).json({ error: "Erro interno do servidor" });
}