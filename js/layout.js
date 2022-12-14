let cart = {};

function printClothesInCart(elementHTML) {
    let html = "";
    let totalPrice = 0;
    let totalCount = 0;

    const arrayCart = Object.values(cart);

    arrayCart.forEach(({ id, name, urlImages, price, amount }) => {
        html += `
            <div class="item_cart">
                <div class="item_cart-img">
                    <img src="${urlImages}" alt="">
                </div>

                <h4 class="item_cart-title">${name}</h4>
                <div class="item_cart-options" id="${id}">
                    <i class='bx bx-minus'></i>
                    <span id="amount">${amount}</span>
                    <i class='bx bx-plus-medical'></i>
                    <i class='bx bx-trash'></i>
                    <p>  $${price * amount}</p>
                </div>
            </div>
        `;
    });

    arrayCart.forEach(({ amount, price }) => {
		totalPrice += amount * price;
	});
	arrayCart.forEach(({ amount }) => {
		totalCount += amount;
	});

    elementHTML.innerHTML = html;
    productListTotal.innerHTML = `<p>Total: $${totalPrice}</p>`;
    
    
}
function printClothes(elementHTML, data) {
    let html = "";

    data.forEach(({ id, name, price, stock, urlImages }) => {
        html += `
        <div class="clothes">
            <div class="clothes__img">
                <img src="${urlImages}" alt="${name}">
            </div>
            <div class="clothes__body" id="${id}">
                <h2 class="clothes__body-title">${name}</h2>
                <p>precio: ${price}</p>
                <p>stock: ${stock}</p>
                <button class="btn btn__add">Agregar</button>
            </div>
        </div>
    `;
    });

    elementHTML.innerHTML = html;
}

export { printClothesInCart, printClothes, cart };
