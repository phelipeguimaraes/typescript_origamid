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
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const base = 'https://api.origamid.dev/json';
        const response = yield fetch(base + url);
        return yield response.json();
    });
}
function checkInterface(obj, key) {
    if (obj && typeof obj === "object" && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const jogo = yield fetchData('/jogo.json');
        if (checkInterface(jogo, 'desenvolvedora')) {
            console.log(jogo.desenvolvedora.toLowerCase());
        }
        const livro = yield fetchData('/livro.json');
        if (checkInterface(livro, 'autor')) {
            console.log(livro.autor);
        }
    });
}
handleData();
