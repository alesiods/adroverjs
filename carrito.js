//modificado de titulo
let titulo = document.getElementById("principal");
titulo.style.color = "#ffc107";
titulo.style.fontSize = "70px";


let carrito = [];


let tituloTotalCompra = document.createElement("h3");
tituloTotalCompra.innerText = "Total de tu compra $:";
carritoDeCompras.appendChild(tituloTotalCompra);

let tituloPrecio = document.createElement("p");
tituloTotalCompra.appendChild(tituloPrecio);
tituloPrecio.innerText = "0";


let tituloCantidad = document.createElement("p");
tituloCantidad.innerText = "Cantidad de productos:";
tituloTotalCompra.appendChild(tituloCantidad);

let tituloTotalUnidades = document.createElement("p");
tituloTotalUnidades.innerText = "0";
tituloTotalCompra.appendChild(tituloTotalUnidades);



let conjunto = document.createElement("div");
//agregado de clase articulosDestacados creada en css al div
conjunto.setAttribute("class", "row");




//Renderizado de los productos recorriendo el array

for (const producto of productos) {
    let listado = document.createElement("div");
    listado.setAttribute("class", "col-xl-4 col-sm-6");
    listado.innerHTML = `
                        <div class="card"></div>
                        <img src="${producto.imagen}" class="card-img-top"></img>
                        <div class="card-body"></div>
                        <h4 class="card-title"> Tipo: ${ producto.nombre } </h4> 
                        <p class="card-text"> Precio: $ ${ producto.precio } </p> 
                        <button class="btn btn-warning" id="${producto.id}"> Comprar </button>`;
    conjunto.appendChild(listado);
    mercaderia.appendChild(conjunto);
    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
}

function agregarAlCarrito(id) {
    carrito.push(productos[id - 1]);
    console.log(carrito);
    calcularTotalCarrito();
    localStorage.setItem("carritoAlmacenado", JSON.stringify(carrito));
}


//Mostrado de precio y cantidad al usuario

function calcularTotalCarrito() {
    let total = 0;
    for (const prod of carrito) {
        total += prod.precio;
        console.log(total);
    }
    tituloPrecio.innerText = total;
    tituloTotalUnidades.innerText = carrito.length;
}

//Vaciado de carrito

let botonVaciar = document.createElement("button");

botonVaciar.setAttribute("id", "vaciar");
botonVaciar.setAttribute("class", "btn btn-warning");

botonVaciar.innerText = "Vaciar";

tituloTotalCompra.appendChild(botonVaciar);

botonVaciar.onclick = () => {
    carrito = [];
    tituloPrecio.innerText = "0";
    tituloTotalUnidades.innerText = "0";
    localStorage.removeItem("carritoAlmacenado");
}

console.log(carrito);







//Boton Sorteo

let botonSorteo = document.getElementById("btnSorteo")

botonSorteo.addEventListener("click", participarSorteo);

function participarSorteo() {
    alert("Felicitaciones fuiste anotado al sorteo mensual")
}