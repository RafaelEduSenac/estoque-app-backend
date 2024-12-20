# Backend do sistema de estoque

Este é o backend do sistema de estoque. Ele expõe uma API para gerenciar produtos em um banco de dados utilizando Sequelize e SQLite.


## Funcionalidades

- **Listar Produtos:** Endpoint para listar todos os produtos cadastrados.
- **Cadastrar Produtos:** Endpoint para adicionar novos produtos.
- **Editar Produtos:** Endpoint para atualizar informações de produtos existentes.
- **Excluir Produtos:** Endpoint para remover produtos.


# Como Rodar o Backend

1. **Clone o repositório:**

git clone https://github.com/RafaelEduSenac/estoque-app-backend.git

2. **Instale as dependências:**

npm install

3. **Configuração do banco de dados:**

O Sequelize irá automaticamente criar o banco SQLite na raiz do projeto ao rodar o servidor.

4. **Inicie o servidor:**

node server.js

5. **Testar a API:**

Use ferramentas como Postman ou curl para consumir os endpoints.