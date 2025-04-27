const nav = document.getElementById('nav')
const btnMobile = document.getElementById("btn-mobile")
const menu = document.getElementById("menu")


function handleClick(e: PointerEvent) {
  const elemento = e.currentTarget

  if(elemento instanceof HTMLButtonElement) {
    nav?.classList.toggle("active")
     if(btnMobile?.getAttribute("aria-label") === "Abrir Menu" && btnMobile?.getAttribute("aria-expanded") === 'false') {
      btnMobile.setAttribute("aria-label", "Fechar menu")
      btnMobile.setAttribute('aria-expanded', 'true')
     } else {
      if(btnMobile) {
        btnMobile.setAttribute("aria-label", "Abrir Menu")
        btnMobile.setAttribute("aria-expanded", 'false')
      }
     }
     
     console.log(btnMobile?.getAttribute("aria-label"))
     console.log(btnMobile?.getAttribute("aria-expanded"))
  }
}

btnMobile?.addEventListener('pointerdown', handleClick)
