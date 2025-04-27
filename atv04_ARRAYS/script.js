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
const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, 'Taxas', 30, 'Produto', 50, 3];
function MaiorQue10(data) {
    return data.filter(n => n > 10);
}
function filtrarValores(data) {
    return data.filter(valor => typeof valor === 'number');
}
console.log(MaiorQue10(numeros));
console.log(filtrarValores(valores));
const dados = [
    ["senhor dos aneis", 80],
    ["a guerra dos tronos", 120]
];
console.log('////////////////////////');
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizar("dEsIGN"));
//console.log(normalizar(500))
function fetchURL(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        // manipularData(data)
    });
}
fetchURL('https://api.origamid.dev/json/cursos.json');
//function manipularData(data: {nome: string}) {
/// console.log(data.nome)
//}
console.log("/////////////////////////");
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
    });
}
mostrarCursos([{ nome: "Phelipe", horas: 50 }]);
console.log("//////////////////////");
const button = document.querySelector('button');
const config = localStorage.getItem("config");
if (button !== null) {
    button.click();
}
if (button) {
    button.click();
}
button === null || button === void 0 ? void 0 : button.click();
let total;
function teste() {
}
console.log(typeof teste());
const jogo = {
    nome: 'Ragnarok'
};
const livro = {};
if (jogo.nome) {
    jogo.nome.toLowerCase();
}
document.body.innerHTML = `${jogo.nome} e ${livro.nome}`;
