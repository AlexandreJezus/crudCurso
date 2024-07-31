const prompt = require("prompt-sync")();

const cursos = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= cursos.length || isNaN(indice);

const modelo = () => {
  let curso = {};

  while (true) {
    curso.nome = prompt("Qual é o nome do curso? ");
    if (nomeInvalido(curso.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    curso.professor = prompt("Qual é o seu professor? ");
    if (nomeInvalido(curso.professor)) {
      console.log("O professor não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    curso.aluno = prompt("Qual é o seu número de aluno? ");
    if (nomeInvalido(curso.aluno)) {
      console.log("O número não pode ser vazio");
    } else {
      break;
    }
  }
  return curso;
};

const listagem = () =>
  cursos.forEach((curso, i) => {
    console.log(
      `${i + 1} - Curso: ${curso.nome} - Professor: ${
        curso.professor
      } - Alunos: ${curso.aluno}`
    );
  });

const criar = () => {
  const curso = modelo();

  cursos.push(curso);

  console.log("Curso adicionado com sucesso.");
};

const atualizar = () => {
  while (true) {
    if (cursos.length == 0) {
      console.log("Lista de cursos esta vazia.");
      break;
    }

    listagem();

    const indice = lerIndice("Qual é o curso que deseja atualizar? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      const curso = modelo();
      cursos[indice] = curso;
      break;
    }
  }
};

const remover = () => {
  while (true) {
    listagem();

    const indice = lerIndice("Qual é o cadastro que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      cursos.forEach((curso) => {
        if (curso.sequencia == indice) {
          curso.sequencia = -1;
        }
      });
      cursos.splice(indice, 1);
      console.log("Cadastro removido com sucesso");
      break;
    }
  }
};

module.exports = {
  modelo,
  criar,
  listagem,
  atualizar,
  remover,
};
