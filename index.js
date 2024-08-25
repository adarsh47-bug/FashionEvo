"use strict";

const btnSideBar = document.getElementsByClassName('btn-side-bar');
const sideBar = document.getElementById('sidebar');

btnSideBar[0].addEventListener("click", () => {
  sideBar.classList.toggle('hidden')
})
btnSideBar[1].addEventListener("click", () => {
  sideBar.classList.toggle('hidden')
})

// service-worker.js

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function (err) {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
