import { Producto,productos } from "./clases.js"




// let productos= [
//     {nombre: "NOTEBOOK GAMER ASUS ROG ZEPHYRUS",categoria:"Gaming",img:"https://images.start.com.ar/GA401QC-K2105W-365.jpg",stock:"255",precio:"$ 1.599.999",codigo:"111",marca:"ASUS ROG ZEPHYRUS",descrip:"G14 14 RYZEN 7 GA401QC-K2105W 16GB 512SSD NVIDIA GEFORCE RTX 3050 W11"},
//     {nombre: "NOTEBOOK GAMER ASUS ROG ZEPHYRUS",categoria:"Gaming",img:"https://images.start.com.ar/GA401QC-K2105W-365.jpg",stock:"255",precio:"$ 1.599.999",codigo:"111",marca:"ASUS ROG ZEPHYRUS",descrip:"G14 14 RYZEN 7 GA401QC-K2105W 16GB 512SSD NVIDIA GEFORCE RTX 3050 W11"},
//     {nombre: "NOTEBOOK GAMER ASUS ROG ZEPHYRUS",categoria:"Gaming",img:"https://images.start.com.ar/GA401QC-K2105W-365.jpg",stock:"255",precio:"$ 1.599.999",codigo:"111",marca:"ASUS ROG ZEPHYRUS",descrip:"G14 14 RYZEN 7 GA401QC-K2105W 16GB 512SSD NVIDIA GEFORCE RTX 3050 W11"},
//     {nombre: "NOTEBOOK GAMER ASUS ROG ZEPHYRUS",categoria:"Gaming",img:"https://images.start.com.ar/GA401QC-K2105W-365.jpg",stock:"255",precio:"$ 1.599.999",codigo:"111",marca:"ASUS ROG ZEPHYRUS",descrip:"G14 14 RYZEN 7 GA401QC-K2105W 16GB 512SSD NVIDIA GEFORCE RTX 3050 W11"}
// ]

const productos = [
    { nombre: "Celular", descripcion: "Descripción del celular",marca:"samsung" },
    { nombre: "Auricular", descripcion: "Descripción del auricular" , marca:"sony"},
    { nombre: "Computadora", descripcion: "Descripción de la computadora", marca: "lenovo" },
    
]

// capturar lo que se ingresa
const searchInput= document.getElementById("searchInput")  

// se van guardando los resultados
const resultList=document.getElementById("resultList")

const noResults=document.getElementById("noResults")  //const para cuando no se encuentre lo que se busca

// manejar la busqueda

const handleSearch=()=>{
    const searchTerm= searchInput.value.toLowerCase()

    const filteredProducts= productos.filter((product)=>product.nombre.toLowerCase().startsWith(searchTerm))  //va mostrando los productos a medida que se va escribiendo
   
  

    resultList.innerHTML=""  //deja la lista de resultados limpia

    if (filteredProducts.length ===0){

        noResults.style.display="block"
    } else{
        filteredProducts.forEach((product)=>{
            const li=document.createElement("li");
            li.textContent=product.nombre;
            resultList.appendChild(li);
        });
        noResults.style.display="none";
    }
   

    if(searchInput.value ===""){
        resultList.innerHTML=""
    }
}

searchInput.addEventListener("input",handleSearch);
 
// form-buscador.addEventListener("change",buscadorProd)



