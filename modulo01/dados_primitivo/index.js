const nome = 'Lucas';
const nome1 = "Lucas";
const nome2 = `Lucas`;

const num1 = 10;
const num2 = 10.423;

let nomeAluno; // undefined = não aponta pra local nenhum da memória
nomeAluno = "pacman";
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum da memoria

const aprovado = true;
console.log(typeof nome , sobrenomeAluno);

const a = [1, 2, 3];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);

