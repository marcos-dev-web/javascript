var x = 'x1';

console.log(typeof z); // undefined

function a() {
  var y = 'y1'; // global dentro desta função 

  console.log(x, y); // x1 y1

  function b() {
    x = 'xb1'; // atribui o valor 'xb1' para a variável já existente
    y = 'yb1'; // atribui o valor 'yb1' para a variável fora, ele não cria uma nova variável
    z = 'zb1'; // cria uma nova variável global e atribui o valor 'zb1'
  }

  b();
  console.log(x, y, z); // xb1 yb1 zb1
}

a();
console.log(x, z); // xb1 zb1
console.log(typeof y); // indefinido já que 'y' é uma variável local da função 'a'