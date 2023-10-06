let productos = [];
let carrito = [];

// Funcoin para cargar productos desde el almacenamiento local al inicio
function traerItemsStorage() {
    productos = JSON.parse(localStorage.getItem('productos')) || [];
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
}

// Funcion para llenar el dropdown de selección de productos
function popularDropdown() {
    const selectProductos = document.querySelector('#productos');
    productos.forEach(({ nombre, precio }, index) => {
        const option = document.createElement('option');
        option.textContent = `${nombre} - $${precio}`;
        option.value = index;
        selectProductos.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    traerItemsStorage();
    popularDropdown();
    dibujarTabla();

    const btnAgregar = document.querySelector('#agregar');

    // Evento al hacer clic en "Agregar al Carrito"
    btnAgregar.addEventListener('click', () => {
        const selectProductos = document.querySelector('#productos');
        const productoSeleccionado = productos.find((item, index) => index === +selectProductos.value);

        if (productoSeleccionado === undefined) {
            alert('Por favor, seleccione un producto primero.');
            return;
        }

        const indiceCarrito = carrito.findIndex((item) => item.producto.nombre === productoSeleccionado.nombre);

        if (indiceCarrito !== -1) {
            carrito[indiceCarrito].cantidad++;
        } else {
            const item = { producto: productoSeleccionado, cantidad: 1 };
            carrito.push(item);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        dibujarTabla();
    });
});

// Funcion para actualizar la tabla del carrito en el DOM
function dibujarTabla() {
    const bodyTabla = document.getElementById('items');
    const total = document.querySelector('#total');
    bodyTabla.innerHTML = '';

    carrito.forEach((item, index) => {
        const { producto: { nombre, precio }, cantidad } = item;

        bodyTabla.innerHTML += `
        <tr class="text-white">
            <td>${nombre || ''}</td>
            <td>$${precio || ''}</td>
            <td>${cantidad || ''}</td>
            <td>${cantidad * precio || 0}</td>
            <td>
                <button id="item-${index}" class="btn btn-danger">Remove</button>
            </td>
        </tr>
        `;

        document.querySelector(`#item-${index}`).addEventListener('click', () => {
            carrito.splice(index, 1);
            dibujarTabla();
            localStorage.setItem('carrito', JSON.stringify(carrito));
        });
    });

    //Funcion limpiar carrito
    const limpiarCarritoButton = document.getElementById('limpiar-carrito');

    limpiarCarritoButton.addEventListener('click', () => {
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        dibujarTabla();
    });


    // Calcular el total de la compra
    total.textContent = carrito.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
}

productos.push(new Producto('Cuadro Verde', 500));
productos.push(new Producto('Cuadro Azul', 550));
productos.push(new Producto('Cuadro Blanco', 600));
productos.push(new Producto('Cuadro Rojo', 1280));

localStorage.setItem('productos', JSON.stringify(productos));



