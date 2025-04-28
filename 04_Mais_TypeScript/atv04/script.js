"use strict";
const produto1 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "Azul"
};
const produto2 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 70);
    }
}
mostrarQuantidadePartial(produto2);
const artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 400,
    tags: ["HTML", "Front End"],
    autor: "Phelipe",
};
if (typeof artigo.autor === "string") {
    console.log(artigo.autor.toUpperCase());
}
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({
    titulo: "HTML e CSS"
});
