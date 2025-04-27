const links = document.querySelectorAll('.link')

function ativarElementoAnchor(elemento: HTMLElement) {
  elemento.style.color = 'red'
  elemento.style.border = '2px solid red'
  
}

// function ativarElementoButton(elemento: HTMLButtonElement) {
//   elemento.style.color = 'red'
//   elemento.style.border = '2px solid red'
// }

links.forEach((link) => {
  // console.dir(link.__proto__.__proto__.__proto__.__proto__)
  if(link instanceof HTMLElement)
  ativarElementoAnchor(link)

  // if(link instanceof HTMLButtonElement)
  //   ativarElementoButton(link)

})


