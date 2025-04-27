"use strict";
const frase = 'Front End';
const preco = 500;
const condi = preco > 100;
console.log(typeof frase);
console.log(typeof preco);
console.log(typeof condi);
console.log(typeof null);
if (typeof frase === 'string') {
    console.log('Frase é uma string');
}
else {
    console.log('Frase é uma string');
}
/////////////////////////////////
const frase1 = new String('Front End');
const frase2 = String('Front End');
const frase3 = 'Front End';
String.prototype.toUpperCase();
console.log(frase1.toLowerCase());
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3.toUpperCase());
console.log(frase3.toUpperCase());
///////////////////////////////////////////////////
console.log('-------------------------------------');
///////////////////////
let total = 200;
total = '4000';
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return false;
    }
}
if (isNumber('500')) {
    console.log("teste");
}
//console.log(isNumber('2'))
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.click();
console.log('//////////////////////////////////////////////////');
console.log("Exercício");
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    if (typeof value === "string") {
        let num = Number(value);
        return num;
    }
    else {
        throw "Value deve ser number ou string";
    }
}
console.log(toNumber(5));
console.log(toNumber('10'));
//console.log(toNumber(true))
console.log("----------------------------");
let exemplo = 20;
exemplo = 'product';
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado? ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}
const computador = {
    nome: 'Computador',
    preco: 4999,
    teclado: true
};
preencherDados(computador);
preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: false
});
function pintarCategoria(categoria) {
    console.log(categoria);
}
pintarCategoria('descod');
console.log('///////////////////////////////////////////');
