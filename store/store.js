"use strict";

const cardContainer = document.getElementById("card-container");
const card = document.getElementById("product-card");
const btnMore = document.getElementById('btn-more');

const btnSideBar = document.getElementsByClassName('btn-side-bar');
const sideBar = document.getElementById('sidebar');

const array = [
  { img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', name: ' Basic Tee', price: '88', color: 'Black' },
  { img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg', name: 'Basic Tee', price: '34', color: 'Aspen White' },
  { img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg', name: 'Basic Tee', price: '54', color: "Charcoal" },
  { img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg', name: 'Artwork Tee', price: '48', color: "Iso Dots" },
  { img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', name: ' Basic Tee', price: '88', color: 'Black' },
  { img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg', name: 'Basic Tee', price: '34', color: 'Aspen White' },
  { img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg', name: 'Basic Tee', price: '54', color: "Charcoal" },
  { img: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg', name: 'Artwork Tee', price: '48', color: "Iso Dots" }
];

document.addEventListener('DOMContentLoaded', () => {
  array.forEach((obj, i) => {
    cardContainer.insertAdjacentHTML('beforeend', `
      <div id="product-card-${i}" class="group relative p-4 rounded-lg border border-gray-700">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="${obj.img}"
              alt="Front of men&#039;s Basic Tee in black."
              class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                 <a href="../cart/cart.html">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                 ${obj.name}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">${obj.color}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${obj.price}</p>
          </div>
          <a style="text-decoration: none; color: none;">
            <button class="w-[100%] px-4 py-2 my-2 rounded-lg bg-black text-white">Buy Now ></button>
          </a>
        </div>
        `
    )
  })
})

let count = 8;
btnMore.addEventListener('click', () => {
  cardContainer.insertAdjacentHTML('beforeend', array.forEach((obj, i) => {
    cardContainer.insertAdjacentHTML('beforeend', `
      <div id="product-card-${i + count}" class="group relative p-4 rounded-lg border border-gray-700">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="${obj.img}"
              alt="Front of men&#039;s Basic Tee in black."
              class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="../cart/cart.html">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                 ${obj.name}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">${obj.color}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${obj.price}</p>
          </div>
          <a style="text-decoration: none; color: none;">
            <button class="w-[100%] px-4 py-2 my-2 rounded-lg bg-black text-white">Buy Now ></button>
          </a>
        </div>
        `
    )
  })
  )
  count = count + 4;
})

// Side bar buttons

btnSideBar[0].addEventListener("click", () => {
  sideBar.classList.toggle('hidden')
})
btnSideBar[1].addEventListener("click", () => {
  sideBar.classList.toggle('hidden')
})