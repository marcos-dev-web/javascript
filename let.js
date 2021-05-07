function f1() {
  if (3 > 2) {
    var y = '[var] this is inside if';
    let x = '[let] this is inside if';
  }

  console.log(y); // show the value
  console.log(x); // Uncaught ReferenceError: x is not defined
}

function f2(toSwitch) {
  // retorna um erro pois, o switch só tem um bloco que são suas 
  // chaves, por isso não é possível declarar a mesma variével
  // em cases diferentes
  /*
  switch (toSwitch) {
    case 18:
      let year = new Date().getFullYear() - 18;
      return year;
    case 9:
      let year = (new Date().getFullYear() - 9) * 2;
      return year;
  }
  */
}

function l1() {
  for (let i = 0; i < 10; i++) {
    console.log(`(let) inside for: [${i}]`)
  }
  console.log(`(let) outside for: [${i}]`); // 'i' is not defined
}

function l2() {
  for (var i = 0; i < 10; i++) {
    console.log(`(var) inside for: [${i}]`);
  }
  console.log(`(var) outside for: [${i}]`); // 'i' is '10'
}


// o código abaixo é totalmente válido
let x = "x o";

function a() {
  let x = "x i";
  if (3 > 2) {
    let x = "x i [if]";
    console.log(x);
  }
  console.log(x);
}

a();
console.log(x);