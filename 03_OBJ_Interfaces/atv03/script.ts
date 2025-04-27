// // function retorno<variavel>(a: variavel) : variavel {
// //   return a
// // }

// // console.log(retorno("A Game"))
// // console.log(retorno(200))
// // console.log(retorno(true))

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const frutas = ["Banana", "Pêra", "Uva", "Laranja", "Limão", "Maçã"]

// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0, 5)
// }

// console.log(firstFive(numeros))
// console.log(firstFive(frutas).map(item => item))

// console.log("-----------------------")

// function notNull<T>(arg: T) {
//   if(arg !== null) return arg
//   else return null
// }

// console.log(notNull('Phelipe')?.toLocaleLowerCase())
// console.log(notNull(200)?.toFixed())

// console.log("----------------------")

// function tipoDado<T>(a: T): {dado: T; tipo: string} {
//   const resultado = {
//     dado: a,
//     tipo: typeof a
//   }
//   console.log(resultado)
//   return resultado
// }

// tipoDado(500)
// tipoDado("Opa")
// tipoDado(true)

// console.log("------------------------")

// // function extractText<T extends HTMLElement>(el: T){
// //     return {
// //       texto: el.innerHTML,
// //       el
// //     }
// // }

// // const link = document.querySelector('a')

// // if(link) {
// //   console.log(extractText(link).el.href)
// // }

// // document.querySelector

// // function $<T extends Element>(selector: string) : T | null {
// //   return document.querySelector(selector)
// // }

// // const link = $<HTMLAnchorElement>('a')

// const link = document.querySelector<HTMLVideoElement>('.link')
// if(link instanceof HTMLVideoElement) {
//   link.volume
// }

//  async function getData<T>(url: string) : Promise<T> {
//    const response = await fetch(url)
//    return await response.json()
//  }

//  interface Notebook {
//    nome: string,
//    preco: number
//  }

//  async function handleData() {
//    const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json')
//    console.log(notebook.preco)
//  }

//  handleData()

function extractText<Tipo extends HTMLElement>(el: Tipo) {
  return {
    texto: el.innerText,
    el
  }
}

//const link = document.querySelector("a")
// if(link) {
//   console.log(extractText(link).el.href)
// }

// function $<T extends Element>(selector: string) : T | null {
//   return document.querySelector(selector)
// }

// const link = $<HTMLAnchorElement>("a")?.href

const link =  document.querySelector<HTMLAnchorElement>('.link')

link?.href

async function getData<T>(url: string) : Promise<T> {
  const response = await fetch(url)
  return await response.json()
}

interface Notebook {
  nome: string, 
  preco: number
}

async function handleData() {
  const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json')
  console.log(notebook.preco)
}

handleData()

// FUNCTIONS
function somar(a: number, b: number, c?:number) : number {
  return a + b + (c ? c : 0)
}

console.log(somar(2, 7, 8))

const subtrair = (a:number, b:number) => a - b

console.log(subtrair(5,3))

type Callback = (e: MouseEvent) => void

function pintarTela(cor: string) : void {
  document.body.style.background = cor
}

pintarTela('black')

const btn = document.querySelector("button")

btn?.click()

function isString(value: any) {
  if(typeof value === 'string') {
    return true
  }
}

console.log(isString('teste'))
console.log(isString(200))