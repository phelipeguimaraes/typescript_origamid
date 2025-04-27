function somar(a, b) {
    return a + b;
}
console.log(somar(10, 6));
// annotation
var produto = 'Livro';
var preco = 120;
var carro = {
    marca: "Audi",
    portas: 5
};
var barato = preco < 400 ? true : 'produto caro';
function somarNum(a, b) {
    return a + b;
}
console.log(somarNum(4, 5));
//somarNum(4,'4')
var nintendo = {
    nome: 'Nintendo',
    preco: '2000'
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
var produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
//exercicio 1
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto('tESTe'));
