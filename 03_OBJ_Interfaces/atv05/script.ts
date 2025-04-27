// async function fetchCursos() {
//       const response = await fetch('https://api.origamid.dev/json/cursos.json');
//       const json = await response.json();
//       handleCursos(json);
// }

// fetchCursos()

// function handleCursos(data: unknown) {
//       if(data instanceof Array) {
//          console.log('É uma instância de Array')
//       }
//       if(Array.isArray(data)) {
//          console.log("É array")
//       }
// }

// function isString(value: unknown) {
//       return typeof value === "string"
// }

// function handleData(data: unknown) {
//       if(isString(data)) {
//         return data.toUpperCase()
//       }
// }

// console.log(handleData('Aperta'))

// console.log("///////////////////")

// async function fetchProduto() {
//       const response = await fetch('https://api.origamid.dev/json/notebook.json');
//       const json = await response.json();
//       handleProduto(json);
// }
// fetchProduto()

// interface Produto {
//       nome: string;
//       preco: number
// }

// function isProduto(value: unknown) : value is Produto {
//       if(value && typeof value === 'object' && 'nome' in value && 'preco' in value ) {
//             return true
//       } else {
//             return false
//       }
// }

// function handleProduto(data: unknown) {
//       if(isProduto(data)) {
//             console.log(data.nome)
//       }
// }

// AQUI BROOWW
// console.log("///////////////////")

// interface Produto {
//       nome: string;
//       preco: number;
// }

// async function fetchProduto() {
//       const response = await fetch('https://api.origamid.dev/json/notebook.json');
//       return response.json() as Promise<Produto>;
// }

// async function handleProduto() {
//       const produto = (await fetchProduto())
//       console.log(produto.nome)
//       console.log(produto.preco)
// }

// handleProduto()

// const video = document.querySelector('video')!

// video?.volume

// document.querySelector("a")!.href = "https://www.google.com.br"

// const video1 = document.querySelector('.player') as HTMLVideoElement
// const video2 = <HTMLVideoElement>document.querySelector('.player')
// const video3 = document.querySelector<HTMLVideoElement>('.player')
// const video4 = document.querySelector('.player');

// (video4 as HTMLVideoElement).volume

// const {body} : {body: HTMLElement}  = document

// interface Produto {
//       nome: string;
//       preco?: number;
// }

// function handleData({nome, preco}: Produto) {
//       nome.includes('book')
//       preco?.toFixed()
// }

// handleData({
//       nome: 'Notebook',
//       preco: 4000
// })

// function handleClick1({currentTarget, pageX, pageY}: MouseEvent) {
//       if(currentTarget instanceof HTMLElement) {
//             currentTarget.innerHTML = `Mouse click X: ${pageX}`
//       }
//       console.log(pageX)
//       console.log(pageY)
// }


// function handleClick({currentTarget}: {currentTarget: EventTarget | null}) {
//       if(currentTarget instanceof HTMLElement) {
//             currentTarget.innerHTML = `Mouse click X:`
//       }
// }

// document.documentElement.addEventListener('click', handleClick)
// document.documentElement.addEventListener('touchstart', handleClick)
 

function comparar(tipo: "maior" | "menor", ...numeros: number[]) {
   if(tipo === "menor") {
      return Math.min(...numeros)
   }
   if(tipo === "maior") {
      return Math.max(...numeros)
   }
}

console.log(comparar('maior', 3, 4, 5, 6, 7, 20, 10, 30, 1))
console.log("------------------------")

// Intersection
type Produto = {
   preco: number;
 };
 
 type Carro = {
   rodas: number;
   portas: number;
 };
 
 function handleProdutoCarro(dados: Produto & Carro) {
   dados.rodas;
   dados.portas;
   dados.preco;
 }

 handleProdutoCarro({rodas: 4, portas:2, preco: 40000})


 type TipoCarro = {
   rodas: number;
   portas: number;
 }

 type TipoCarroComPreco = TipoCarro & {
   preco: number;
 }


 interface InterfaceCarro {
   rodas: number;
   portas: number;
 }

 interface InterfaceCarro {
   preco: number;
 }

 function getProp(datas: InterfaceCarro) {
   return `
   Rodas: ${datas.rodas},
   Portas: ${datas.portas},
   Preço: ${datas.preco}
   `
 }

 console.log(getProp({rodas: 4, portas: 2, preco: 10000}))

 
 interface Window {
   userId: number;
 }

 window.userId = 908

 