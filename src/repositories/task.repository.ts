// src/repositories/task.repository.ts
import { PrismaClient, Task } from '@prisma/client';

const prisma = new PrismaClient();

export class TaskRepository {
  async create(data: { title: string }): Promise<Task> {
    return await prisma.task.create({
      data,
    });
  }

  async findAll(): Promise<Task[]> {
    return await prisma.task.findMany({
      orderBy: { createdAt: 'desc' } // Tarefas mais recentes primeiro
    });
  }

  async findById(id: string): Promise<Task | null> {
    return await prisma.task.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<Task>): Promise<Task> {
    return await prisma.task.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.task.delete({ where: { id } });
  }
}