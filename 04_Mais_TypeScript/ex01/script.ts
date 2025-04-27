async function FetchAPI(){
   const response = await fetch("https://api.origamid.dev/json/vendas.json")
   const data = await response.json()
   console.log(data)
   somarProdutos(data)
}

FetchAPI()

interface detalhesProdutos {
   marca: string;
   cor: string;
}

type Vendas = [string, number, string, detalhesProdutos]

function somarProdutos(data: Vendas[]) {
  console.log(data[0][3].cor);
  let total = 0;
  for (let c = 0; c < data.length; c++) {
    total += data[c][1];
  }

  document.body.innerText = `
   ${total}
`;

  for(let i = 0; i < data.length; i++) {
   document.body.innerHTML += `
   <p>${data[i][0]}</p>
   `
  }
}


const arr = [3, 5, 10, 2, 30]
const somar = arr.reduce((anterior, atual) => {
   return anterior + atual
}, 0)

console.log(somar)