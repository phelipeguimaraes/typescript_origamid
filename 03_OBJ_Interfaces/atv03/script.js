"use strict";
// // function retorno<variavel>(a: variavel) : variavel {
// //   return a
// // }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// // console.log(retorno("A Game"))
// // console.log(retorno(200))
// // console.log(retorno(true))
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"]
// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0, 5)
// }
// console.log(firstFive(numeros))
// console.log(firstFive(frutas).map(item => item))
// console.log("-----------------------")
// function notNull<T>(arg: T) {
//   if(arg !== null) return arg
//   else return null
// }
// console.log(notNull('Phelipe')?.toLocaleLowerCase())
// console.log(notNull(200)?.toFixed())
// console.log("----------------------")
// function tipoDado<T>(a: T): {dado: T; tipo: string} {
//   const resultado = {
//     dado: a,
//     tipo: typeof a
//   }
//   console.log(resultado)
//   return resultado
// }
// tipoDado(500)
// tipoDado("Opa")
// tipoDado(true)
// console.log("------------------------")
// // function extractText<T extends HTMLElement>(el: T){
// //     return {
// //       texto: el.innerHTML,
// //       el
// //     }
// // }
// // const link = document.querySelector('a')
// // if(link) {
// //   console.log(extractText(link).el.href)
// // }
// // document.querySelector
// // function $<T extends Element>(selector: string) : T | null {
// //   return document.querySelector(selector)
// // }
// // const link = $<HTMLAnchorElement>('a')
// const link = document.querySelector<HTMLVideoElement>('.link')
// if(link instanceof HTMLVideoElement) {
//   link.volume
// }
//  async function getData<T>(url: string) : Promise<T> {
//    const response = await fetch(url)
//    return await response.json()
//  }
//  interface Notebook {
//    nome: string,
//    preco: number
//  }
//  async function handleData() {
//    const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json')
//    console.log(notebook.preco)
//  }
//  handleData()
function extractText(el) {
    return {
        texto: el.innerText,
        el
    };
}
//const link = document.querySelector("a")
// if(link) {
//   console.log(extractText(link).el.href)
// }
// function $<T extends Element>(selector: string) : T | null {
//   return document.querySelector(selector)
// }
// const link = $<HTMLAnchorElement>("a")?.href
const link = document.querySelector('.link');
link === null || link === void 0 ? void 0 : link.href;
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return yield response.json();
    });
}
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const notebook = yield getData('https://api.origamid.dev/json/notebook.json');
        console.log(notebook.preco);
    });
}
handleData();
// FUNCTIONS
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(somar(2, 7, 8));
const subtrair = (a, b) => a - b;
console.log(subtrair(5, 3));
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('black');
const btn = document.querySelector("button");
btn === null || btn === void 0 ? void 0 : btn.click();
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
console.log(isString('teste'));
console.log(isString(200));
