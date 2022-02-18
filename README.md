<h1 align="center">
  <img alt="Logo askme" style="width: 200px"src="https://cdn.discordapp.com/attachments/936094333248086058/944230554994360360/logo.png" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>
</p>


<p align="center">
  
 ## 🎥 Demo
  <a href="https://askme-project-81d23.web.app/">
   <img alt="askme"  src="https://cdn.discordapp.com/attachments/936094333248086058/944230592499814420/Pagina_inicial.png" width="100%">
 </a>
 
</p>

## ⛏️ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

O projeto askme foi desenvolvido para criação de perguntas e respostas entre as pessoas. 

## 🔖 Layout

Para visualizar o projeto [acesse o link](https://www.figma.com/file/K2AQN38Wt0nFmWbgPvO2kO/Askme). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## 🚀 Como executar

Clone o repositório
```bash
 $ git clone https://github.com/LeoDiasz/react-askme.git
```

Para iniciá-lo, siga os passos abaixo:
```bash
# Instalar as dependências
$ yarn

# Iniciar o projeto
$ yarn start
```

O app estara disponivel no browser pelo endereço http://localhost:3000.

Lembrando que para utilizar o aplicativo é necessário criar um projeto no [Firebase](https://firebase.google.com/) com Realtime Database.


## 🔋 Requisitos Funcionais
 - Realizar criação de salas.
 - Entrar em salas.
 - Listar salas existentes.
 - Criar perguntas.
 - Criar respostas para perguntas.
 - Listar perguntas e respostas.
 - Dar curtida nas perguntas e respostas.
 - Excluir perguntas e respostas.
 - Excluir sala.
  
## 📑 Regras de Negócio

 - Só é permitido criar salas estando logado com o Google.
 - Usuário pode optar em colocar senha na sala.
 - Na tentativa de entrar em uma sala com senha na tela inicial, ira exibir uma caixa para digitar a senha.
 - Na listagem de salas existentes, ao clicar em uma sala com senha ira exibir a opção para colocar senha.
 - Só é permitido criar perguntas e resposta estando logado com o Google.
 - Usuário só pode dar uma curtida nas perguntas e respostas.
 - Administrador pode excluir qualquer pergunta ou resposta feita na sala.
 - Usuário só pode excluir suas perguntas e respostas.
 - Somente o administrador pode excluir a sala.
