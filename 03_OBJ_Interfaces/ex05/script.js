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
function getFetchAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        const data = yield response.json();
        handleCursos(data);
    });
}
getFetchAPI();
function isCursos(value) {
    if (value && typeof value === "object" && "nome" in value && "horas" in value && "tags" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(datas) {
    if (datas instanceof Array) {
        datas.filter(isCursos).forEach(data => {
            document.body.innerHTML += `
         <div style="margin-bottom: 40px; font-family: Helvetica, sans-serif;">
            <p>Curso: ${data.nome}</p>
            <p>Horas: ${data.horas}</p>
            <p>Tags: ${data.tags.join(', ')}</p>
         </div>
         `;
        });
    }
}
