interface Produto {
   nome: string;
   quantidade: number;
}

const produto1 = {
   nome: "Notebook",
   quantidade: 10,
   cor: "Azul" 
}

const produto2 = {
   nome: "Geladeira",
   quantidade: 30,
   freezer: true
}

function mostrarQuantidade(produto: Produto) {
   console.log(produto.quantidade + 20)
}

mostrarQuantidade(produto1)
mostrarQuantidade(produto2)

function mostrarQuantidadePartial(produto: Partial<Produto>) {
   if(produto.quantidade){
      console.log(produto.quantidade + 70)
   }
}

mostrarQuantidadePartial(produto2)

interface Post {
   titulo: string;
   visualizacoes: number;
   tags: string[],
   [key: string] : unknown
}

const artigo: Post = {
   titulo: "Como aprender HTML",
   visualizacoes: 400,
   tags: ["HTML", "Front End"],
   autor: "Phelipe",
}

if(typeof artigo.autor === "string") {
   console.log(artigo.autor.toUpperCase())
}

interface ObjetoLiteral {
   [key: string]: unknown
}

type ObjetoLiteral2 = Record<string, unknown>

function mostrarTitulo(obj: ObjetoLiteral2) {
   if("titulo" in obj) {
      console.log(obj.titulo);
   }
}

mostrarTitulo({
   titulo: "HTML e CSS"
})