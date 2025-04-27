"use strict";
class Produto {
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Produto("A guerra dos tronos");
console.log(livro.nome);
console.log(livro instanceof Produto);
class Livro extends Produto {
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function searchProduct(search) {
    if (search === "O Hobbit") {
        return new Livro("Neymar", "J. R. R. Tolkien");
    }
    if (search === "Dark Souls") {
        return new Jogo('Corinthians', 1);
    }
    return null;
}
const product = searchProduct('O Hobbit');
if (product instanceof Livro) {
    console.log(`${product.nome} e ${product.autor}`);
}
const productt = searchProduct('Dark Souls');
if (productt instanceof Jogo) {
    console.log(`Time: ${productt.nome} com ${productt.jogadores}`);
}
if (product instanceof Produto) {
    console.log(product.nome);
}
const honda = {
    nome: "Honda"
};
console.log(honda);
class MEC {
    constructor(funcionarios) {
        this.funcionarios = funcionarios;
    }
}
class Escola extends MEC {
    constructor(nome, funcionarios) {
        super(funcionarios);
        this.nome = nome;
    }
}
function buscarEscola(busca) {
    if (busca === "Emmanuel") {
        return new Escola("Colégio Emmanuel", 150);
    }
    if (busca === "IPÊ") {
        return new Escola("Colégio IPÊ Bueno", 500);
    }
    return null;
}
const school1 = buscarEscola("Emmanuel");
const school2 = buscarEscola("IPÊ");
console.log(school2);
console.log(school1 instanceof MEC);
console.log(school2 instanceof MEC);
console.log(Escola instanceof MEC);
