const input = document.querySelector('input')

const total = localStorage.getItem('total')
input.value = total
const value = Number(input.value)
calcularGanho(value)

function calcularGanho(value) {
  const p = document.querySelector('p')
  p.innerHTML = `ganho total: ${value + 100 - input.value * 0.2}`
}

function totalMudou() {
  const value = Number(input.value)
  localStorage.setItem('total', value)
  calcularGanho(value)
}

input.addEventListener('keyup', totalMudou)