//import { Producto,productos} from "./clases.js";

let contenedorBlog= document.querySelector("#content-blog");
let sectionInicioSesion= document.querySelector("#linkInicioSesion");
//let auth= JSON.parse(localStorage.getItem("auth")) || null;
let productos= JSON.parse(localStorage.getItem("productos")) || null;


 const cargarTarjeta = ()=>{
    productos.map((producto)=>{
        let col = document.createElement("div");
        col.classList = "col";
        let tarjeta = `<div class="card h-100">
        <img src= ${producto.img}  class= "card-img-top " alt=${producto.nombre}>
        <div class="card-body">
        <h5 class=" card-title">${producto.nombre}</h5>   
        <p class= "car-text"> </p>
        <a href="#" class="btn d-grid  btn-primary">Ver más</a>
        </div>
        </div>` ;  
        col.innerHTML =tarjeta;
        contenedorBlog.append(col);
    });
};
    cargarTarjeta();

// document.getElementById('contenedorCards1').creando_cards();
    

    