"use strict";
// interface Produto {
//    nome: string;
//    preco: number;
//    novo:boolean;
// }
// let chave: keyof Elementos;
function selecionar(seletor) {
    return document.querySelector(seletor);
}
selecionar("a");
selecionar("video");
