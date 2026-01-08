# clean-arch-TaskManager-API
API RESTful robusta para gerenciamento de tarefas, desenvolvida com Node.js, TypeScript, Prisma (ORM) e validação Zod, seguindo princípios da arquitetura limpa


# 🚀 Modern Task API (Clean Architecture)

Uma API RESTful desenvolvida para demonstrar a aplicação de boas práticas de desenvolvimento Back-end, utilizando **Node.js**, **TypeScript** e **Prisma ORM**.

O projeto vai além de um simples CRUD, implementando uma **Arquitetura em Camadas** (Controller, Service, Repository) para garantir desacoplamento, testabilidade e escalabilidade, além de validação rigorosa de dados.

## 🛠️ Tecnologias Utilizadas

* **Node.js** & **Express**: Base da aplicação.
* **TypeScript**: Para tipagem estática e segurança no código.
* **Prisma ORM**: Para interação com o Banco de Dados (SQLite/PostgreSQL).
* **Zod**: Para validação de dados de entrada (Schema Validation).
* **Arquitetura**: Layered Architecture (Controller, Service, Repository).

## ⚙️ Funcionalidades

- [x] **Criar Tarefa**: Valida o input e salva no banco com UUID.
- [x] **Listar Tarefas**: Retorna todas as tarefas ordenadas por criação.
- [x] **Atualizar Tarefa**: Permite editar título ou status de conclusão.
- [x] **Deletar Tarefa**: Remove a tarefa do banco de dados.
- [x] **Tratamento de Erros**: Respostas HTTP consistentes para erros de validação ou servidor.

## 🚀 Como rodar o projeto

Siga os passos abaixo para baixar e executar a API na sua máquina.

### Pré-requisitos
* Node.js instalado (v16 ou superior).

### Passo a passo

1. **Clone o repositório:**
   git clone [https://github.com/VitorHenriqueGitHub/clean-arch-TaskManager-API.git](https://github.com/VitorHenriqueGitHub/clean-arch-TaskManager-API.git)
   cd NOME-DO-REPOSITORIO

2. **Instale as dependências:**
- [x] npm install

3. **Configure o Banco de Dados (Prisma): Este comando criará o arquivo SQLite local e as tabelas necessárias.**
- [x] npx prisma migrate dev --name init

4. **Inicie o Servidor:**
- [x] npm run dev

O servidor rodará em http://localhost:3000
