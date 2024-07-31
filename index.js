const prompt = require("prompt-sync")();

const { modelo, criar, listagem, atualizar, remover } = require("./crud.js");

while (true) {
  console.log(`
              1 - Registrar curso
              2 - Listar cursos
              3 - Atualizar um curso
              4 - Remover um curso
              5 - Sair
              `);

  const opcao = prompt("Qual opção deseja?");

  switch (opcao) {
    case "1":
      criar();
      break;
    case "2":
      listagem();
      break;
    case "3":
      atualizar();
      break;
    case "4":
      remover();
      break;
    case "5":
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}
