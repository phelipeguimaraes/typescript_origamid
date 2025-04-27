"use strict";
const nav = document.getElementById('nav');
const btnMobile = document.getElementById("btn-mobile");
const menu = document.getElementById("menu");
function handleClick(e) {
    const elemento = e.currentTarget;
    if (elemento instanceof HTMLButtonElement) {
        nav === null || nav === void 0 ? void 0 : nav.classList.toggle("active");
        if ((btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.getAttribute("aria-label")) === "Abrir Menu" && (btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.getAttribute("aria-expanded")) === 'false') {
            btnMobile.setAttribute("aria-label", "Fechar menu");
            btnMobile.setAttribute('aria-expanded', 'true');
        }
        else {
            if (btnMobile) {
                btnMobile.setAttribute("aria-label", "Abrir Menu");
                btnMobile.setAttribute("aria-expanded", 'false');
            }
        }
        console.log(btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.getAttribute("aria-label"));
        console.log(btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.getAttribute("aria-expanded"));
    }
}
btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.addEventListener('pointerdown', handleClick);
