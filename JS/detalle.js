const productos = [
    {
        codigo: "0",
        nombre: "iPhone SE 64 GB",
        precio: '$1.209.999',
        categoría: 'celulares',
        imagen: 'https://www.macstation.com.ar/img/productos/2871-mmxg3le-a-iphone-se-64gb-starlight-blanco-estrella.jpg',
        descripcion: 'El iPhone SE une el chip más potente, el tamaño de iPhone más popular y un precio más asequible. Justo lo que estabas esperando',
        cantidadStock: 20
    },
    {
        codigo: "1",
        nombre: "iPhone 14 Pro Max",
        precio: '$1.209.999',
        categoría: 'celulares',
        imagen: 'https://www.macstation.com.ar/img/productos/3119-2.jpg',
        descripcion: 'combinada con prestaciones de seguridad pensadas para salvar vidas. Y una espectacular cámara de 48 Mpx que consigue un nivel de detalle descomunal. Todo bajo el control del chip más avanzado en un smartphone',
        cantidadStock: 15
    },
    {
        codigo: "2",
        nombre: "Beats Pill",
        precio: '$1.209.999',
        categoría: 'accesorios',
        imagen: 'https://www.macstation.com.ar/img/productos/818-beats-pill-black-1.jpg',
        descripcion: 'calidad de sonido clara y nítida en un dispositivo de diseño portátil y compacto',
        cantidadStock: 10
    }
];
// Obtener todos los enlaces de productos
let productoLinks = document.querySelectorAll(".producto-link");
// Elemento donde se mostrarán los detalles del producto
let detalleProducto = document.getElementById("detalle-producto");
// Función para mostrar los detalles de un producto

function mostrarDetalleProducto(index) {
    // Busca el producto en el arreglo por su código
    let producto = productos.find((p) => p.codigo === index);
        if (producto){
        // contenido HTML para mostrar los detalles del producto
            const contenidoHTML =`
            <div>
                <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre}">
            </div>
            <div>
                <div class="card-body">
                <h1 class="card-title">${producto.nombre}</h1>
                
                <h3 class="card-text">${producto.precio}</h3>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text"><small class="text-body-secondary">codigo: ${producto.codigo}</small></p>
                <p>Cantidad en Stock: ${producto.cantidadStock}</p>
                <button type="button" class="btn-carrito" class="btn btn-primary btn-lg">añadir al carrito</button>
                <button id="volver" type="button" class="btn-carrito" class="btn btn-primary btn-lg">Volver a los productos</button>
                
            </div>
            </div>`;
           // Mostrar los detalles del producto
            detalleProducto.innerHTML = contenidoHTML;        
           //Evento al boton "Volver" para volver a todos productos
            let volver= document.getElementById("volver");
            volver.addEventListener("click", () => {
            detalleProducto.innerHTML = "";
            });
        } else {
            detalleProducto.innerHTML = "Producto no encontrado.";
        }
        }
        // Evento de clic a cada enlace de producto
        productoLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault(); // Evitar la navegación por defecto
                const id = event.target.getAttribute("data-id");
                mostrarDetalleProducto(id);
            });
        });
