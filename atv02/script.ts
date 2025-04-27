function somar(a:number, b: number) {
  return a + b
}

console.log(somar(10,6))


// annotation
let produto = 'Livro'
let preco = 120

const carro = {
  marca: "Audi",
  portas: 5
}

const barato = preco < 400 ? true : 'produto caro'


function somarNum(a: number, b:number) {
  return a + b
}

console.log(somarNum(4,5))
//somarNum(4,'4')

const nintendo = {
  nome: 'Nintendo',
  preco: '2000'
}

function transformarPreco(produto: {nome:string, preco:string}) {
  produto.preco = 'R$ ' + produto.preco
  return produto
}

const produtoNovo = transformarPreco(nintendo)
console.log(produtoNovo)

//exercicio 1
function normalizarTexto(texto:string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto('tESTe'))

