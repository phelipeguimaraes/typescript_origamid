// import plugin from "./plugin.js"

// plugin()

interface Produto {
   nome: string;
   preco: number
}

function handleProduto(dados: any) {
   dados
}

let link = document.querySelector("a")
if(link) {
   link.innerHTML = "teste"
}

const teste = "teste"

function handleClick(this: HTMLElement) {
   console.log(this)
}

document.documentElement.addEventListener("click", handleClick)

function trocarModo(modo: string) {
   if(modo === "dark") {
      return "color: black"
   } else {
      return "color: white"
   }
}

trocarModo("light")

function maiuscula(frase: string) {
   console.log(frase)
   const total = 100
}

