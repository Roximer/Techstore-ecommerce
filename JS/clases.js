let productos= [
    {nombre: "NOTEBOOK GAMER ASUS ROG ZEPHYRUS",categoria:"Gaming",img:"https://images.start.com.ar/GA401QC-K2105W-365.jpg",stock:"255",precio:"$ 1.599.999",codigo:"111",marca:"ASUS ROG ZEPHYRUS",descrip:"G14 14 RYZEN 7 GA401QC-K2105W 16GB 512SSD NVIDIA GEFORCE RTX 3050 W11"},
    {nombre: "NOTEBOOK GAMER ASUS ROG ZEPHYRUS",categoria:"Gaming",img:"https://images.start.com.ar/GA401QC-K2105W-365.jpg",stock:"255",precio:"$ 1.599.999",codigo:"111",marca:"ASUS ROG ZEPHYRUS",descrip:"G14 14 RYZEN 7 GA401QC-K2105W 16GB 512SSD NVIDIA GEFORCE RTX 3050 W11"},
    {nombre: "NOTEBOOK GAMER ASUS ROG ZEPHYRUS",categoria:"Gaming",img:"https://images.start.com.ar/GA401QC-K2105W-365.jpg",stock:"255",precio:"$ 1.599.999",codigo:"111",marca:"ASUS ROG ZEPHYRUS",descrip:"G14 14 RYZEN 7 GA401QC-K2105W 16GB 512SSD NVIDIA GEFORCE RTX 3050 W11"},
    {nombre: "NOTEBOOK GAMER ASUS ROG ZEPHYRUS",categoria:"Gaming",img:"https://images.start.com.ar/GA401QC-K2105W-365.jpg",stock:"255",precio:"$ 1.599.999",codigo:"111",marca:"ASUS ROG ZEPHYRUS",descrip:"G14 14 RYZEN 7 GA401QC-K2105W 16GB 512SSD NVIDIA GEFORCE RTX 3050 W11"}
]

class Producto {
    constructor(nombre,categoria,img,stock,precio,codigo,marca,descrip){
        this.nombre = nombre;
        this.categoria = categoria;
        this.img = img;
        this.stock = stock;
        this.precio = precio;
        this.codigo = codigo;
        this.marca = marca;
        this.descrip = descrip;
    }
}

class User{
    constructor(userName,userEmail,userPass){
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPass = userPass;
    }
}

export {productos,Producto,User}