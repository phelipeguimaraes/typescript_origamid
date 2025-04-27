function abortar(mensagem: string): never {
  throw new Error(mensagem)
}

// abortar("Um erro ocorreu!")
// console.log("Tente novamente!")

interface Quadrado {
  lado: number;
  perimetro(lado: number) : number
}

function calcular(forma: Quadrado) {
  forma.perimetro(3)
}


function normalizar(valor: string) : string
function normalizar(valor: string[]) : string[]
function normalizar(valor: string | string[]) : string | string[] {
  if(typeof valor === "string") {
    return valor.trim().toLowerCase()
  } else {
    return valor.map(item => item.trim().toLowerCase())
  }
}

console.log(normalizar(" Produto ").toUpperCase())
console.log(normalizar(["Banana", "UVA ", "Pêra"]))

function $(seletor: 'a') : HTMLAnchorElement | null
function $(seletor: 'video') : HTMLVideoElement | null
function $(seletor: string) : Element | null
function $(seletor: string) : Element | null {
  return document.querySelector(seletor)
}

$('a')
$('video')
$(".item")

console.log("///////////////////////////////")

function typeGuard(value: any) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

console.log(typeGuard(354.40))
console.log(typeGuard('500'))
console.log(document.body)

const obj = {
  nome: 'Origamid'
}

if("nome" in obj) {
  console.log('sim')
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  const json = await response.json()
  handleProuto(json)
}

interface Produto {
  nome: string;
  preco: number
}

function handleProuto(data: Produto) {
  console.log(data)
  if("preco" in data) {
    document.body.innerHTML = `
    <p>Nome: ${data.nome}</p>
    <p>Preço: ${data.preco + 100}</p>
    `
  }

}

fetchProduto()

function typeGuardd(value: unknown) {
  if(typeof value === "string") {
    return value.toLowerCase()
  }
  if(typeof value === "number") {
    return value.toFixed()
  }
  if(value instanceof HTMLElement) {
    return value.innerText
  }
}

console.log(typeGuardd('Origamid'))
console.log(typeGuardd(500.54))
console.log(typeGuardd(document.body))