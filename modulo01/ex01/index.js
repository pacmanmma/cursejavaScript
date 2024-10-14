const nome = "Lucas";
const sobrenome = "Alves";
const idade = 19;
const peso = 90;
const altura = 1.75;
let imc;
let anoNacimento;

imc = peso / (altura * altura);
anoNacimento = 2005 -  idade;

// console.log(nome, sobrenome, 'tem', idade, 'anos ,pesa', peso, 'KG', 'tem', altura, 'de altura e o seu IMC é de', imc);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} naceu em ${anoNacimento}`)