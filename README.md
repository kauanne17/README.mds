# Projeto CRUD MVC - Node.js + Express + EJS + MySQL

**Descrição**
Projeto exemplo com funcionalidades CRUD (Create, Read, Update, Delete) para Usuários, Cursos e Alunos,
usando arquitetura MVC, autenticação baseada em sessão e senhas criptografadas com bcrypt.

**Funcionalidades**
- Cadastro, edição, consulta e exclusão de Usuários, Cursos e Alunos.
- Relacionamento: Aluno -> Curso (chave estrangeira).
- Autenticação com `express-session` e bcrypt.
- Views com EJS e partials (header, footer, navbar).
- Layout responsivo com Bootstrap.

**Instalação**
1. Clone ou descompacte este repositório.
2. `cd project_crud_ejs`
3. `npm install`
4. Ajuste `.env` com suas credenciais do MySQL.
5. Crie o banco e as tabelas executando o script `db/schema.sql` ou usando sua ferramenta preferida.
6. `npm start`
7. Abra `http://localhost:3000`

**Usuários de exemplo**
- registrar via tela `/auth/register`

**Tecnologias**
- Node.js, Express, EJS, MySQL, bcrypt, express-session, Sequelize (opcional)

**Estrutura**
- controllers/, models/, routes/, views/, public/, db/

