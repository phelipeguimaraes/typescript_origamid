"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function abortar(mensagem) {
    throw new Error(mensagem);
}
function calcular(forma) {
    forma.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map(item => item.trim().toLowerCase());
    }
}
console.log(normalizar(" Produto ").toUpperCase());
console.log(normalizar(["Banana", "UVA ", "Pêra"]));
function $(seletor) {
    return document.querySelector(seletor);
}
$('a');
$('video');
$(".item");
console.log("///////////////////////////////");
function typeGuard(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
console.log(typeGuard(354.40));
console.log(typeGuard('500'));
console.log(document.body);
const obj = {
    nome: 'Origamid'
};
if ("nome" in obj) {
    console.log('sim');
}
function fetchProduto() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const json = yield response.json();
        handleProuto(json);
    });
}
function handleProuto(data) {
    console.log(data);
    if ("preco" in data) {
        document.body.innerHTML = `
    <p>Nome: ${data.nome}</p>
    <p>Preço: ${data.preco + 100}</p>
    `;
    }
}
fetchProduto();
function typeGuardd(value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    if (typeof value === "number") {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
console.log(typeGuardd('Origamid'));
console.log(typeGuardd(500.54));
console.log(typeGuardd(document.body));
