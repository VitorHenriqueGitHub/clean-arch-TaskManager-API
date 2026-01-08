// src/services/task.service.ts
import { TaskRepository } from '../repositories/task.repository';

export class TaskService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async createTask(title: string) {
    // Exemplo de regra: Podemos formatar o título antes de salvar
    const formattedTitle = title.trim(); 
    return await this.taskRepository.create({ title: formattedTitle });
  }

  async getAllTasks() {
    return await this.taskRepository.findAll();
  }

  async updateTask(id: string, data: { title?: string; completed?: boolean }) {
    // Verificar se existe antes de atualizar
    const taskExists = await this.taskRepository.findById(id);
    if (!taskExists) {
      throw new Error("TaskNotFound");
    }
    return await this.taskRepository.update(id, data);
  }

  async deleteTask(id: string) {
    const taskExists = await this.taskRepository.findById(id);
    if (!taskExists) {
      throw new Error("TaskNotFound");
    }
    return await this.taskRepository.delete(id);
  }
}