/*const variavel = "Eu estou aprenndo javaScript";
console.log(variavel);

function nomeNaTela(name = "'Nome não informado'") {
  console.log(`O nome é: ${name}`);
}
nomeNaTela('João Antonio');

function sum(value1 = 0, value2 = 0) {
  console.log(value1 + value2);
}
sum(85, 15);

const myNumber = 15
function soma(myNumber, number2 = 5){
  console.log(myNumber - number2)
}
soma(myNumber, 15) */

//function sum(value1, value2) {
//  const resultado = value1 + value2;
//return resultado;
//}

//const resultadoDaSoma = sum(10, 20);
//console.log(resultadoDaSoma);

/*const cart = [10, 244, 99, 2, 20, 33, 250];

function calculantoDesconto(preco, desconto) {
  const precoComDesconto = preco * (desconto / 100);
  return precoComDesconto;
}

let precoFinal = 0;

cart.forEach((preco) => {
  if (preco >= 30) {
    let desconto = calculantoDesconto(preco, 10);
    precoFinal +=  preco - desconto
  } else {
    precoFinal = precoFinal + preco;
  }
});
console.log(precoFinal);*/

/*const cart = [10, 244, 99, 2, 20, 33, 250];

function calculantoDesconto(preco, desconto) {
  const precoComDesconto = preco * (desconto / 100);
  return precoComDesconto;
}

let precoFinal = 0;
let precoFinalSd = 0;

cart.forEach((valorItem) => {
  precoFinalSd = precoFinalSd + valorItem;
});

cart.forEach((valorItem2) => {
  if (valorItem2 >= 30) {
    let desconto = calculantoDesconto(valorItem2, 10);
    precoFinal += valorItem2 - desconto;
  } else {
    precoFinal = precoFinal + valorItem2;
  }
});
const valorEconomizado = precoFinalSd - precoFinal;

console.log(`Valor final sem desconto: ${precoFinalSd}`);
console.log(`Valor final com desconto: ${precoFinal}`);
console.log(`Valor da economia: ${valorEconomizado.toFixed(2)}`);*/


const cart = [10, 244, 99, 2, 20, 33, 250];

function darDesconto(preco, desconto){
  let precoCd = preco * (desconto / 100)
  return precoCd}
  

const valorDoDesconto = 10
let valorComDesconto = 0
let valorSemDesconto = 0

cart.forEach(valorItem2 => {
  valorSemDesconto += valorItem2
});

cart.forEach(valorItem => {
  if(valorItem >= 30){
    let desconto = darDesconto(valorItem, valorDoDesconto)
    valorComDesconto = valorComDesconto + valorItem - desconto
  }
    else{
      valorComDesconto = valorComDesconto + valorItem;
    }
  
  
});
let valorGanho = valorSemDesconto - valorComDesconto;
console.log(`O valor com desconto foi: ${valorComDesconto.toFixed(2)}`);

console.log(`O valor sem o desconto seria: ${valorSemDesconto}`)

console.log(`O valor do desconto foi?: ${valorGanho.toFixed(2)}`)