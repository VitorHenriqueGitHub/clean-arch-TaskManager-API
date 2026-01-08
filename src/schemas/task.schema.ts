// src/schemas/task.schema.ts
import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "O título é obrigatório",
    invalid_type_error: "O título deve ser um texto",
  }).min(3, "O título deve ter pelo menos 3 caracteres"),
});

export const updateTaskSchema = z.object({
  title: z.string().min(3).optional(),
  completed: z.boolean().optional(),
});