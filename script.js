//PEDIDO DE PRODUCTOS A SUMAR PARA OBTENER EL TOTAL DE LA COMPRA

/* let acumulador = 0;
let producto = prompt("Selecciona los productos que deseas comprar.\n YERBA \n AZUCAR \n FIDEOS \n ARROZ \n PURE \n ACEITE \n Si desea conocer el total ingrese: TOTAL").toUpperCase();

console.log(producto);

while (producto != "TOTAL") {
    switch (producto) {
        case "YERBA":
            {
                acumulador += 300;
                break;
            }
        case "AZUCAR":
            {
                acumulador += 80;
                break;
            }
        case "FIDEOS":
            {
                acumulador += 70;
                break;
            }
        case "ARROZ":
            {
                acumulador += 60;
                break;
            }
        case "PURE":
            {
                acumulador += 50;
                break;
            }
        case "ACEITE":
            {
                acumulador += 250;
                break;
            }
        default:
            {
                console.log("error. producto no disponible");
                break;
            }
    }
    producto = prompt("Selecciona los productos que deseas comprar.\n YERBA \n AZUCAR \n FIDEOS \n ARROZ \n PURE \n ACEITE \n Si desea conocer el total ingrese: TOTAL").toUpperCase();

    console.log(producto);
}

//UNA VEZ ESCOGIDO TODOS LOS PRODUCTOS

alert("el total es " + acumulador);

function calcularIva(limpio) {
    let precioSinIva = limpio / 1.21;
    alert("subtotal sin iva: " + precioSinIva);
}


calcularIva(acumulador);


//ARRAYS de objetos

const comboSorteo = [
    { producto: "Arroz 1kg", cantidad: 2 },
    { producto: "Azucar", cantidad: 3 },
    { producto: "Yerba 1kg", cantidad: 2 },
    { producto: "Aceite 3lt", cantidad: 1 },
    { producto: "Fideos", cantidad: 3 },
    { producto: "Pure de Tomate", cantidad: 4 },
]
for (let i = 0; i < 6; i++) {
    console.log(comboSorteo[i]);
}

comboSorteo.push(prompt("Ingrese un PRODUCTO EXTRA a agregar al Combo de Regalo"));

console.log(comboSorteo); */

//DOM

/* let pedido = prompt("Ingrese el producto que desea comprar"); */

//modificado de titulo
let titulo = document.getElementById("principal");
titulo.style.color = "blue";
titulo.style.fontSize = "70px";

//Listado Productos

const productos = [{ id: 1, nombre: "Yerba", precio: 300 },
    { id: 2, nombre: "Azucar", precio: 80 },
    { id: 3, nombre: "Fideos", precio: 70 },
    { id: 4, nombre: "Arroz", precio: 60 },
    { id: 5, nombre: "Pure", precio: 50 },
    { id: 6, nombre: "Aceite", precio: 250 },
];

const carrito = [];

let conjunto = document.createElement("div");
//agregado de clase articulosDestacados creada en css
conjunto.setAttribute("class", "articulosDestacados");

for (const producto of productos) {
    let listado = document.createElement("div");
    listado.innerHTML = `<h4> Tipo: ${ producto.nombre } <h4> 
                        <p> Precio: $ ${ producto.precio } </p> 
                        <button id="${producto.id}"> Comprar </button>`;
    conjunto.appendChild(listado);
    mercaderia.appendChild(conjunto);
    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
}

function agregarAlCarrito(id) {
    carrito.push(productos[id - 1]);
    console.log(carrito);
}






//Boton Sorteo

let botonSorteo = document.getElementById("btnSorteo")

botonSorteo.addEventListener("click", participarSorteo);

function participarSorteo() {
    alert("Felcitaciones fuiste anotado al sorteo mensual")
}