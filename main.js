/******Menu *******/

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", (e) => {
        if(!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });

    })(document);


    /*************Carrito************** */

import { dataDB } from "./js/data.js";
import { printClothes, printClothesInCart, cart } from "./js/layout.js";
import "./js/showCart.js";

const contentClothes = document.querySelector(".content_clothes");
const contentCartBody = document.querySelector(".content_cart-body");

contentClothes.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn__add")) {
        const idClothes = +e.target.parentElement.id;

        const findClothes = dataDB.find((item) => item.id === idClothes);

        if (cart[idClothes]) {
            cart[idClothes].amount++;
        } else {
            cart[idClothes] = findClothes;
            cart[idClothes].amount = 1;
        }

        printClothesInCart(contentCartBody);
    }
});

contentCartBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-minus")) {
        const idClothes = +e.target.parentElement.id;
        cart[idClothes].amount--;
    }

    if (e.target.classList.contains("bx-plus-medical")) {
        const idClothes = +e.target.parentElement.id;
        cart[idClothes].amount++;
    }

    if (e.target.classList.contains("bx-trash")) {
        const idClothes = +e.target.parentElement.id;
        delete cart[idClothes];
    }

    printClothesInCart(contentCartBody);
});

printClothes(contentClothes, dataDB);


