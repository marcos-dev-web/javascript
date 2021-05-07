/*
function x() {
	y = 'this is the variable is an Y';  // declara uma variavel de escopo global
	var z = 'this is the variavel Z'; // declara uma variavel de escopo global na funcao x
}

x();

console.log(y);  // mostra o valor da variavel 'y'
console.log(z);  // emite um erro pois a variavel 'z' só é global no escopo da função 'x'
*/

/*
var object = {
	name: 'marcos',
	height: '175',
	weight: '55',

	show: function() {
		// isto funciona pois variáveis declaradas são criadas antes de
		// qualquer código ser executado
		console.log(object.name);
		console.log(object.height);
		console.log(object.weight);
	}
};

object.show();
*/

/*
var a = 1;
b = 2;

delete this.a; // Lança a exceção TypeError em modo restrito(strict mode).
							 // Caso contrário, Falha silenciosamente.
delete this.b;

console.log(a); // mostra o valor de 'a', pois o mesmo não foi deletado.
console.log(b); // mostra um erro: 'Uncaught ReferenceError: b is not defined'
								// porque a propiedade 'b' foi deletada e não existe mais.
*/

/*
foo = 2;
var foo;
console.log(foo);
// como as declarações de variaveis (e declarações em geral) são processadas
// antes de qualquer código seja executado
//
// isto é interpretado como
// 		var foo = 2;
*/

var x = 'outside function';
function f() {
	var x = y = 'inside function'; // 'x' é declarado localmente, 'y' não é
}

f();
console.log(`${x} | ${y}`); // o 'x' mostrado é o 'x' declarado fora da função
									 // o 'y' mostrado é o 'y' declarado dentro da função
