// const não pode ter seu indentificador alterado nem ser redeclarada.

function f() {
  const WIDTH = 500;
  try {
    WIDTH = 400;
  } catch(err) {
    console.log(err); // TypeError: Assignment to constant variable.
  }

  console.log(WIDTH); // 500
}

function f1() {
  // isto é válido
  const people = {
    nome: "jose",
    age: 32,
  };

  people.nome = "maria";
  people.sex = "F";

  console.log(people);
}

var a = 'a';   // pode ser obtida por: window.a
let b = 'b';   // não pode ser obtida por: window.b
const c = 'c'; // não pode ser obtida por: window.c
