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
function getDate() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        const data = yield response.json();
        showDate(data);
    });
}
getDate();
function showDate(data) {
    data.forEach(data => document.body.innerHTML += `
    <div>
      <h1 style='color: ${data.nivel === "iniciante" ? 'blue' : 'red'}'>Curso: ${data.nome}</h1>
      <p>Horas: ${data.horas}</p>
      <p>Aulas: ${data.aulas}</p>
      <p>Gratuidade: ${data.gratuito ? 'Sim' : 'Não'}</p>
      <p>Tags: ${data.tags}</p>
      <p>Aulas: ${data.idAulas}</p>
      <p>Nível: ${data.nivel}</p>
    </div>
    `);
}
