// import { Producto,productos } from "./clases.js"



// const productos = [
//     { "nombre": "Celular", "descripcion": "Descripción del celular","marca":"samsung" },
//     { "nombre": "Auricular", "descripcion": "Descripción del auricular" , "marca":"sony"},
//     { "nombre": "Computadora", "descripcion": "Descripción de la computadora", "marca": "lenovo" },
    
// ]

// // capturar lo que se ingresa
// const searchInput= document.getElementById("searchInput")  

// // se van guardando los resultados
// const resultList=document.getElementById("resultList")

// const noResults=document.getElementById("noResults")  //const para cuando no se encuentre lo que se busca

// // manejar la busqueda

// const handleSearch=()=>{
//     const searchTerm= searchInput.value.toLowerCase()

//     const filteredProducts= productos.includes((product)=>product.nombre.toLowerCase()===product.toLowerCase())  //va mostrando los productos a medida que se va escribiendo
   
  

//     resultList.innerHTML=""  //deja la lista de resultados limpia

//     if (filteredProducts.length ===0){

//         noResults.style.display="block"
//     } else{
//         filteredProducts.forEach((product)=>{
//             const li=document.createElement("li");
//             li.textContent=product.nombre;
//             resultList.appendChild(li);
//         });
//         noResults.style.display="none";
//     }
   

//     if(searchInput.value ===""){
//         resultList.innerHTML=""
//     }
// }

// searchInput.addEventListener("input",handleSearch);
 
// // form-buscador.addEventListener("change",buscadorProd)



