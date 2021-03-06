var f = null; // null, 0, false

console.log(2 * f);

console.log(typeof x === "undefined"); // true
var x = 3;

var myvar = "value outside";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

const expression = eval("eval(-'-1')+-eval('-5')*2+eval(-'-1')"); // 12

console.log(expression);

class Obj {}

const object = new Obj();

object.name = "jose";

console.log(object);


const a1 = [,,1]; // 3 posições: empty,empty,1
console.log(a1);

if (a1[0] || a1[1]) {
  console.log(true);
}

const o1 = (2 |- ((v) => v*2)(-5));
const o2 = (2 | ((v) => v*2)(-5));
const o3 = !!!!!!!!!!!Boolean.propertyIsEnumerable()[0] * 0b0010 | (0x2 |- ((v) => v*(((true + 1) / 2) * 0x2))(-0b0101));
const o4 = -(Boolean(Boolean(true).propertyIsEnumerable()["toString"]() - (0b0001 + 0x1)) + 0x1 * (0b0101 * 0x2));

console.log(o1); //  10
console.log(o2); // -10
console.log(o3); //  10
console.log(o4); // -10


function t(v) {
	return ((!![] + !![]) * v) + v; // returns v * 3
}

const mv = 20;
function s(v) {
	return t(v) / t(v * 2); // always returns 0.5
}

const g = t(t(t(t(mv)))); // 1620
const h = s(g); // 0.5
const y = s(mv); // 0.5
const z = s(s(s(s(mv)))); // 0.5
console.log(`g: ${g} | h: ${h} | y: ${y} | z: ${z}`);

const obj1 = {
	fn: () => {
		obj1.fn = obj1.fn2;
	},
	fn2: () => {
		delete obj1.fn2;
		obj1.fn = () => {
			delete obj1.fn;
		}
	},
}

obj1.fn()          // altera o seu própio valor
console.log(obj1);
obj1.fn()          // altera o seu própio valor
console.log(obj1);
obj1.fn()          // altera o seu própio valor
console.log(obj1); // delete fn e fn2


var obj2;
obj2 = {
	"-": 'oi',
	"": Number,
	"!": "!",
	[{}]: "joao",
	"eval(": "var a;);",
	"'": "`${'`obj2[\"-\"]`\"\/''`",
	function: class {},
	class: function () {return class {}},
	obj2: obj2,
	[[,,]]: {},
}

console.log(obj2);

Object.keys(obj2).forEach(key => {
	const value = obj2[key];
	console.log(`keyValue: ${key} | value: ${value} | typeValue: ${typeof value} | typeKey: ${typeof key}`);
})

console.log('\01');  // byte nulo
console.log('\b1');  // backspace
console.log('\f1');  // alimentador de formulário
console.log('\n1');  // nova linha
console.log('\r1');  // retorno de carro
console.log('\t1');  // tabulação
console.log('\v1');  // tabulação vertical

console.log("this \
is \
a \
new \
line.");

var lt;
if ((lt = 5) < 10) {
	console.log('lt < 5');
}

if ((lt = lt * 2) < 10) {
	console.log('lt * 2 < 5');
}

document.forms.abc.text.value = 'get from document';
