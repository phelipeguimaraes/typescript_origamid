"use strict";
console.log(document.constructor);
class Produto {
    constructor(nome, preco) {
        this.tipo = 'produto';
        this.nome = nome;
        this.preco = preco;
    }
    getPreco() {
        return Produto.transformarPreco(this.preco);
    }
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
const livro = new Produto("O Senhor dos Anéis", 500);
console.log(livro.tipo);
console.log(livro.nome);
console.log(livro.getPreco());
console.log("--------------------");
class Quadrado {
    constructor(medida) {
        this.lados = 4;
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    constructor(raio) {
        this.PI = Math.PI;
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const q1 = new Quadrado(10);
if (q1 instanceof Quadrado) {
    console.log(q1.getPerimetro());
    console.log(q1.lados);
}
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map(n => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach(forma => {
    if (forma instanceof Quadrado) {
        console.log(forma.lados);
    }
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetro());
    }
});
console.log("--------------------");
const produto1 = ['Notebook', 1800];
const produto2 = ['Notebook', 1800];
produto2[0].toUpperCase();
produto2[1].toFixed(2);
if (typeof produto1[0] === 'string') {
    console.log(produto1[0].toUpperCase());
}
const [nome, preco] = produto2;
console.log("--------------------");
function getText(select) {
    const el = document.querySelector(select);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const btn = getText('button');
if (btn) {
    btn[0].classList;
}
console.log(btn);
