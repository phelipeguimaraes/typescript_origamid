"use strict";
// const video = document.querySelector('#videoPrincipal')
// const inputTxt = document.querySelector("#inputText")
// if(video instanceof HTMLVideoElement) {
//   console.log(video.volume)
// }
// if(inputTxt instanceof HTMLInputElement) {
//   inputTxt.value
// }
// console.log('////////////////////')
// const links = document.querySelectorAll('.link')
// console.log(NodeList)
// console.log(links)
// const arrayLinks = Array.from(links).filter(link => link)
// console.log(arrayLinks)
// links.forEach(link => {
//   if(link instanceof HTMLAnchorElement)
//   console.log(link.href)
// })
// const dados = [1,2,3]
// dados.forEach(dado => {
//   console.log(dado)
// })
// const filterBtn = Array.from(links).filter(link => link instanceof HTMLButtonElement)
// console.log(filterBtn)
// console.log("////////////////")
// // const button = document.querySelector('button')
// // function handleClick(e: PointerEvent) {
// //   console.log(e.pageX)
// // }
// // button?.addEventListener("pointerdown", handleClick)
// // function handleScroll(e: Event) {
// //   console.log(e)
// // }
// // window.addEventListener("scroll", handleScroll)
// function ativarMenu(e: Event) {
//   if(e instanceof MouseEvent) {
//     console.log(e.pageX)
//   }
//   if(e instanceof TouchEvent) {
//     console.log(e.touches[0].pageX)
//   }
// }
// document.documentElement.addEventListener('mousedown', ativarMenu)
// document.documentElement.addEventListener('touchstart', ativarMenu)
// window.addEventListener("keydown", ativarMenu)
// const button = document.querySelector('button')
// function handleClick(this: HTMLButtonElement, e: MouseEvent) {
//   console.log(this)
// }
// button?.addEventListener('click', handleClick)
const button = document.querySelector('button');
function handleClick(e) {
    const elemento = e.currentTarget;
    if (elemento instanceof HTMLElement) {
        console.log(elemento.innerHTML);
    }
}
button?.addEventListener('click', handleClick);
