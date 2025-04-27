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
function FetchAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/vendas.json");
        const data = yield response.json();
        console.log(data);
        somarProdutos(data);
    });
}
FetchAPI();
function somarProdutos(data) {
    console.log(data[0][3].cor);
    let total = 0;
    for (let c = 0; c < data.length; c++) {
        total += data[c][1];
    }
    document.body.innerText = `
   ${total}
`;
    for (let i = 0; i < data.length; i++) {
        document.body.innerHTML += `
   <p>${data[i][0]}</p>
   `;
    }
}
const arr = [3, 5, 10, 2, 30];
const somar = arr.reduce((anterior, atual) => {
    return anterior + atual;
}, 0);
console.log(somar);
