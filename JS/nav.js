


const searchImput =document.getElementById("searchImput");

const resultList =document.getElementById("resultsList");

const noResults =document.getElementById("noResults");

const handleSearch=()=>{
const searchItem=searchImput.value.toLowerCase();
const filteredProducts =products.filter((product)=>product.name.toLowerCase().startsWith(searchItem));

resultList.innerHTML=" "


if(filteredProducts.length ===0){
noResults.style.display ="block"}

 else{
filteredProducts.forEach((products)=>{
const li = document.createElement("li");
li.textContent= product.name;
resultList.appendChild(li);
});

noResults.style.display ="none";}

if(searchImput.value==="" ){
  resultList.innerHTML ="";}

};
searchImput.addEventListener("input", handleSearch);







// // Datos de ejemplo (puedes reemplazarlos con tus propios datos)
// const productos = [
//     { nombre: "Producto 1", descripcion: "Descripción del Producto 1" },
//     { nombre: "Producto 2", descripcion: "Descripción del Producto 2" },
//     { nombre: "Producto 3", descripcion: "Descripción del Producto 3" },
//     // Agrega más productos aquí
// ];

// // Función para buscar productos
// function buscarProductos(query) {
//     query = query.toLowerCase();
//     const results = productos.filter(producto => {
//         return producto.nombre.toLowerCase().includes(query) || producto.descripcion.toLowerCase().includes(query);
//     });
//     return results;
// }

// // Función para mostrar resultados
// function mostrarResultados(resultados) {
//     const resultsDiv = document.getElementById("results");
//     resultsDiv.innerHTML = ""; // Limpiar resultados anteriores

//     if (resultados.length === 0) {
//         resultsDiv.innerHTML = "No se encontraron resultados.";
//     } else {
//         resultados.forEach(producto => {
//             const productoDiv = document.createElement("div");
//             productoDiv.innerHTML = `<h3>${producto.nombre}</h3><p>${producto.descripcion}</p>`;
//             resultsDiv.appendChild(productoDiv);
//         });
//     }
// }

// // Evento click del botón de búsqueda
// const searchButton = document.getElementById("searchButton");
// searchButton.addEventListener("click", () => {
//     const searchInput = document.getElementById("searchInput");
//     const query = searchInput.value.trim();
//     const resultados = buscarProductos(query);
//     mostrarResultados(resultados);
// });

// // Evento de pulsación de tecla en el campo de búsqueda
// const searchInput = document.getElementById("searchInput");
// searchInput.addEventListener("keyup", () => {
//     const query = searchInput.value.trim();
//     const resultados = buscarProductos(query);
//     mostrarResultados(resultados);
// });
