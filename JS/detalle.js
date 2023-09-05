// class Producto{
//     constructor(codigo, nombre, precio, categoría, imagen, descripción, cantidadStock){
//         this.codigo = codigo;
//         this.nombre =nombre;
//         this.precio = precio;
//         this.categoría = categoría;
//         this.imagen = imagen;
//         this.descripción = descripción;
//         this.cantidadStock = cantidadStock;
//         }
//     }
//     let productos = [
//         new Producto('00000', 'iPhone SE 64 GB - Blanco', '$1.209.999', 'celulares', 'https://www.macstation.com.ar/img/productos/2871-mmxg3le-a-iphone-se-64gb-starlight-blanco-estrella.jpg', 'El iPhone SE une el chip más potente, el tamaño de iPhone más popular y un precio más asequible. Justo lo que estabas esperando', 20),
//         new Producto('00001', 'iphone14ProMax', '$1.904.999', 'celulares','https://www.macstation.com.ar/img/productos/3119-2.jpg ',' combinada con prestaciones de seguridad pensadas para salvar vidas. Y una espectacular cámara de 48 Mpx que consigue un nivel de detalle descomunal. Todo bajo el control del chip más avanzado en un smartphone', 10 ),
//         new Producto('00002', 'Beats Pill+ - Negro ', '$121.299', 'parlantes','https://www.macstation.com.ar/img/productos/818-beats-pill-black-1.jpg', 'calidad de sonido clara y nítida en un dispositivo de diseño portátil y compacto', 50),
//         new Producto('00003', 'Powerbeats Pro - Marfil', '$199.399', 'auriculares','https://www.macstation.com.ar/img/productos/2674-1.jpg','Audífonos de alto rendimiento totalmente inalámbricos', 10 ),
//         new Producto('00004', 'Apple Magic Mouse - Negro', '$84.999', 'mause y teclado', 'https://www.macstation.com.ar/img/productos/2940-mmmq3am-a-apple-magic-mouse-negro-superficie-multi-touch.png', 'Es más ligero, lleva menos piezas gracias a la batería recargable y a su parte inferior uniforme', 20),
//         new Producto('00005', 'Beats EP Auriculares - Blanco', '$74.399', 'auriculares','https://www.macstation.com.ar/img/productos/817-beats-ep-headphones-white-1.jpg','Su diseño sin batería y su cable fijo hacen que tú solo te preocupes por una cosa: tu música. Conéctalos y a disfrutar', 10 ),
//     ]


    const productos = [
      {
        codigo: "0",
        nombre:"iPhone SE 64 GB",
        precio:'$1.209.999',
        categoría:'celulares', 
        imagen:'https://www.macstation.com.ar/img/productos/2871-mmxg3le-a-iphone-se-64gb-starlight-blanco-estrella.jpg', 
        descripción:'El iPhone SE une el chip más potente, el tamaño de iPhone más popular y un precio más asequible. Justo lo que estabas esperando', 
        cantidadStock: 20
      },
      {
        codigo: "0",
        nombre:"iPhone SE 64 GB",
        precio:'$1.209.999',
        categoría:'celulares', 
        imagen:'https://www.macstation.com.ar/img/productos/3119-2.jpg    iphone14prpmax', 
        descripción:'El iPhone SE une el chip más potente, el tamaño de iPhone más popular y un precio más asequible. Justo lo que estabas esperando', 
        cantidadStock: 20
      },
      {
        codigo: "0",
        nombre:"iPhone SE 64 GB",
        precio:'$1.209.999',
        categoría:'celulares', 
        imagen:'www.macstation.com.ar/img/productos/818-beats-pill-black-1.jpg', 
        descripción:'El iPhone SE une el chip más potente, el tamaño de iPhone más popular y un precio más asequible. Justo lo que estabas esperando', 
        cantidadStock: 20
      },
      {
        codigo: "0",
        nombre:"iPhone SE 64 GB",
        precio:'$1.209.999',
        categoría:'celulares', 
        imagen:'https://www.macstation.com.ar/img/productos/2674-1.jpg', 
        descripción:'El iPhone SE une el chip más potente, el tamaño de iPhone más popular y un precio más asequible. Justo lo que estabas esperando', 
        cantidadStock: 20
      },
      {
        codigo: "0",
        nombre:"iPhone SE 64 GB",
        precio:'$1.209.999',
        categoría:'celulares', 
        imagen:'https://www.macstation.com.ar/img/productos/2940-mmmq3am-a-apple-magic-mouse-negro-superficie-multi-touch.png', 
        descripción:'El iPhone SE une el chip más potente, el tamaño de iPhone más popular y un precio más asequible. Justo lo que estabas esperando', 
        cantidadStock: 20
      },
      {
        codigo: "0",
        nombre:"iPhone SE 64 GB",
        precio:'$1.209.999',
        categoría:'celulares', 
        imagen:'https://www.macstation.com.ar/img/productos/817-beats-ep-headphones-white-1.jpg', 
        descripción:'El iPhone SE une el chip más potente, el tamaño de iPhone más popular y un precio más asequible. Justo lo que estabas esperando', 
        cantidadStock: 20
      },
      {
        codigo: "0",
        nombre:"iPhone SE 64 GB",
        precio:'$1.209.999',
        categoría:'celulares', 
        imagen:'https://www.macstation.com.ar/img/productos/2871-mmxg3le-a-iphone-se-64gb-starlight-blanco-estrella.jpg', 
        descripción:'El iPhone SE une el chip más potente, el tamaño de iPhone más popular y un precio más asequible. Justo lo que estabas esperando', 
        cantidadStock: 20
      }
    ]

    let contenedorDetalle = document.querySelector("#contenedorDetalle")
  
     const mostrarDetalle =()=>{
      productos.map((product)=>{ 
        let contenido = document.createElement('div');
        contenido.classList ='row g-0'
        let detalle = `<div class="col-md-4">
        <img src="${product.imagen}" class="img-fluid rounded-start" alt="${product.nombre}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${product.nombre}</h5>
          <p class="card-text">${product.descripción}</p>
          <p class="card-text"><small class="text-body-secondary">${product.codigo}</small></p>
        </div>
      </div>`
      contenido.innerHTML = detalle
      contenedorDetalle.append(contenido)
      })
     } 

mostrarDetalle()

    





    
    
    //https://www.macstation.com.ar/img/productos/2871-mmxg3le-a-iphone-se-64gb-starlight-blanco-estrella.jpg  
    //https://www.macstation.com.ar/img/productos/3119-2.jpg    iphone14prpmax
    //https://www.macstation.com.ar/img/productos/818-beats-pill-black-1.jpg    Beats Pill+ - Negro (Black)
    //https://www.macstation.com.ar/img/productos/2674-1.jpg    Powerbeats Pro - Marfil (Ivory)
    //https://www.macstation.com.ar/img/productos/2940-mmmq3am-a-apple-magic-mouse-negro-superficie-multi-touch.png    Apple Magic Mouse - Negro
    //https://www.macstation.com.ar/img/productos/817-beats-ep-headphones-white-1.jpg   Beats EP Auriculares - Blanco (White)
    