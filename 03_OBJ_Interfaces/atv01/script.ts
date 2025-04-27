class Produto {
  nome: string
  constructor(nome: string) {
    this.nome = nome
  }
  // precoReal() {
  //   return `R$ ${this.preco}`
  // }
}

const livro = new Produto("A guerra dos tronos")

console.log(livro.nome)
console.log(livro instanceof Produto)

class Livro extends Produto {
  autor: string
  constructor(nome: string, autor: string) {
    super(nome)
    this.autor = autor
  }
}

class Jogo extends Produto {
  jogadores: number
  constructor(nome: string ,jogadores: number) {
    super(nome)
    this.jogadores = jogadores
  }
}

 function searchProduct( search: string) {
   if(search === "O Hobbit") {
     return new Livro("Neymar", "J. R. R. Tolkien")
   }
   if(search === "Dark Souls") {
     return new Jogo('Corinthians', 1)
   }

   return null
 }

 const product = searchProduct('O Hobbit')

 if(product instanceof Livro) {
  console.log(`${product.nome} e ${product.autor}`) 
 }
 const productt = searchProduct('Dark Souls')
 if(productt instanceof Jogo) {
   console.log(`Time: ${productt.nome} com ${productt.jogadores}` ) 
 }

if (product instanceof Produto) {
  console.log(product.nome)
}

interface Carro {
  nome: string
}

const honda: Carro = {
  nome: "Honda"
}

console.log(honda)

class MEC {
  funcionarios: number
  constructor(funcionarios: number) {
    this.funcionarios = funcionarios
  }
}

class Escola extends MEC {
  nome: string
  constructor(nome: string, funcionarios: number) {
    super(funcionarios)
    this.nome = nome
  }
}

function buscarEscola(busca: string) {
  if(busca === "Emmanuel") {
    return new Escola("Colégio Emmanuel", 150)
  }
  if(busca === "IPÊ") {
    return new Escola("Colégio IPÊ Bueno", 500)
  }
  return null
}

const school1 = buscarEscola("Emmanuel")
const school2 = buscarEscola("IPÊ")
console.log(school2)
console.log(school1 instanceof MEC)
console.log(school2 instanceof MEC)

console.log(Escola instanceof MEC)