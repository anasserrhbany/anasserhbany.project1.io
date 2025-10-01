const quantities = document.querySelectorAll('.quantity');
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

let cart = {};

quantities.forEach(quantity => {
    quantity.addEventListener('change', updateCart);
});

function updateCart(event) {
    const product = event.target.parentElement.querySelector('h2').textContent;
    const price = parseFloat(event.target.dataset.price);
    const quantity = parseInt(event.target.value);

    if (quantity > 0) {
        cart[product] = { price, quantity };
    } else {
        delete cart[product];
    }

    renderCart();
}

function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;

    for (const product in cart) {
        const { price, quantity } = cart[product];
        const itemTotal = price * quantity;
        total += itemTotal;

        const li = document.createElement('li');
        li.textContent = `${product} x ${quantity} = ${itemTotal}€`; 
        cartItems.appendChild(li);
    }

    totalElement.textContent = `${total} €`; }