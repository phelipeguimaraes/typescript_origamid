// interface Produto {
//    nome: string;
//    preco: number;
//    novo:boolean;
// }

// let chave: keyof Produto;

// chave = "nome"


// function coordernadas(x: number, y: number) {
//    return {x, y}
// }

// let coord: typeof coordernadas

// coord = (x:number, y:number) => {
//    return {
//       x,
//       y
//    }
// }

// querySelector keyof

interface Elementos {
   a: HTMLAnchorElement;
   video: HTMLVideoElement;
   div: HTMLElement;
   body: HTMLBodyElement;
   audio: HTMLAudioElement;
}

// let chave: keyof Elementos;

function selecionar<Chave extends keyof Elementos>(seletor: Chave) {
   return document.querySelector(seletor)
}

selecionar("a")
selecionar("video")