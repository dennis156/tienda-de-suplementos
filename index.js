let carrito = [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}
function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `<p>${item.producto} - $${item.precio.toFixed(2)}</p>`;
        carritoElement.appendChild(itemElement);
    });
}

alert("bienvenido usuario")