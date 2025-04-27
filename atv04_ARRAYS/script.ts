const numeros = [ 10, 20, 30, 40, 50, 3 ]
const valores = [ 10, 'Taxas', 30, 'Produto', 50, 3 ]


function MaiorQue10(data: Array<number>) {
 return data.filter(n => n > 10)
}

function filtrarValores(data: Array<string | number>) {
  return data.filter(valor => typeof valor === 'number')
}

console.log(MaiorQue10(numeros))
console.log(filtrarValores(valores))

const dados = [
  ["senhor dos aneis", 80],
  ["a guerra dos tronos", 120]
]

console.log('////////////////////////')

function normalizar(texto: any) {
  return texto.trim().toLowerCase()
}

console.log(normalizar("dEsIGN"))
//console.log(normalizar(500))

async function fetchURL(url: string) {
  const response = await fetch(url)
  const data = await response.json()
 // manipularData(data)
}

fetchURL('https://api.origamid.dev/json/cursos.json')

//function manipularData(data: {nome: string}) {
 /// console.log(data.nome)
//}

console.log("/////////////////////////")

interface Curso {
  nome: string;
  horas: number;
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
  })
}

mostrarCursos([{nome: "Phelipe", horas: 50}])

console.log("//////////////////////")

const button = document.querySelector('button')
const config = localStorage.getItem("config")

if(button !== null) {
  button.click()
}

if(button) {
  button.click()
}

button?.click()

let total;

function teste() {

}

console.log(typeof teste())


// if(total) {
//   console.log("Foi definido!")
// } else {
//   console.log("Não foi definido!")
// }

interface Product {
  nome? : string
}

const jogo: Product = {
  nome: 'Ragnarok'
}

const livro: Product = {

}

if (jogo.nome) {
  jogo.nome.toLowerCase()
}

document.body.innerHTML = `${jogo.nome} e ${livro.nome}`