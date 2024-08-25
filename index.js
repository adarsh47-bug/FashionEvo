"use strict";

const btnSideBar = document.getElementsByClassName('btn-side-bar');
const sideBar = document.getElementById('sidebar');

btnSideBar[0].addEventListener("click", () => {
  sideBar.classList.toggle('hidden')
})
btnSideBar[1].addEventListener("click", () => {
  sideBar.classList.toggle('hidden')
})