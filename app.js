//modificado de titulo
let titulo = document.getElementById("principal");
titulo.style.color = "#ffc107";
titulo.style.fontSize = "70px";



//CARRITO REALIZADO CON JQUERY
let carrito = [];

//Toma de productos de stock.json, y creacion y acomodado de las card

$.get("./stock.json", (res) => {
    console.log(res)

    res.forEach((producto) => {
        $("#mercaderia").append(`
        <div class="col-xl-3 col-sm-6">
            <div class="card margen">
            <img src="${producto.imagen}" class="card-img-top"></img>
                <div class="card-body color colorFondo">
                    <h4 class="letra"> Tipo: ${ producto.nombre } </h4> 
                    <p> Precio: $ ${ producto.precio } </p> 
                 <button class="btn btn-warning" id="btn${producto.id}"> Comprar </button> 
                </div>
            </div>
        </div>
    `)
        $(`#btn${producto.id}`).on("click", function() {
            agregarAlCarrito(producto);
        });
    })
})

//se crea un objeto para que me tome las cantidades
class productoCarrito {
    constructor(obj) {
        this.id = obj.id;
        this.nombre = obj.nombre;
        this.precio = obj.precio;
        this.imagen = obj.imagen;
        this.cantidad = 1;
    }
}

//Agregado de productos al carrito y en la tabla(dom)

function agregarAlCarrito(productoAgregado) {
    let encontrado = carrito.find(prod => prod.id == productoAgregado.id);
    if (encontrado == undefined) {
        let productoAAgregar = new productoCarrito(productoAgregado);
        carrito.push(productoAAgregar);
        console.log(carrito);
        Swal.fire(
            "Agregaste un nuevo producto a tu carrito:",
            productoAgregado.nombre,
            "success"
        );
        $("#tablabody").append(`
    <tr class="tr">
        <td>${productoAgregado.id}</td>
        <td>${productoAgregado.nombre}</td>
        <td id="${productoAAgregar.id}">${productoAAgregar.cantidad}</td>
        <td>${productoAgregado.precio}</td>
        <td><button class=" btn btn-danger btnDelete">X</button></td>
    </tr>`);
        addEvent_borrar()
    } else {
        let posicion = carrito.findIndex(p => p.id == productoAgregado.id);
        let cantidad = carrito[posicion].cantidad += 1;
        $(`#${productoAgregado.id}`).html(carrito[posicion].cantidad);
        console.log(carrito);
    }
    sumarCompra();
    $("#finalizarCompra").fadeIn(1000);
    localStorage.setItem("miCarrito", JSON.stringify(carrito));
}

//Suma de Total

const sumarCompra = () => {
    let total = 0
    for (const produ of carrito) {
        total += produ.precio * produ.cantidad;
        console.log(total);
        tot.innerText = total;
        localStorage.setItem("total", total);
    }
};


// Ubicacion de la suma, botones(vaciar y finalizar) en el DOM

$("#totalCompra").append(`
<div class="disposicionCompra">
    <div>
        <strong class="strongTotal">MI COMPRA $</strong>
        <span id="tot"></span>
    </div>
    <div>
        <button id="botonVaciar" class="btn btn-danger mb-5">Vaciar Carrito</button>
    </div>
</div>
<div>
    <button class="btn btn-success noMostrar mb-4" id="finalizarCompra">Finalizar Compra</button>
</div>
`);

//Vaciado de carrito
$("#botonVaciar").on("click", function() {
    carrito = [];
    tot.innerText = "0";
    let total = 0
    $(".tr").remove();
    localStorage.clear("miCarrito");
    $("#finalizarCompra").fadeOut(1000);
    console.log(total)
});

// Eliminado de articulos especificos con la X de la tabla
//Falta restar en total y en localstorage
function addEvent_borrar() {
    let btnDelete = document.querySelectorAll('.btnDelete');
    console.log(btnDelete);
    btnDelete.forEach(element => {
        element.addEventListener('click', borraLinea)

        function borraLinea() {
            element.parentNode.parentNode.remove();
        }
    });
}


//FORMULARIO DE FINALIZAR COMPRA

//Inputs

let inputNombre = document.getElementById("nombre")

let inputEmail = document.getElementById("email")

let inputTelefono = document.getElementById("telefono")

inputNombre.addEventListener("change", () => {
    let valorNombre = inputNombre.value
    console.log(valorNombre)

    if (valorNombre.length <= 3) {
        alert("Nombre Invalido, introduce mas de 3 letras")
        inputNombre.classList.add("error")
        inputNombre.classList.remove("valido")
    } else {
        inputNombre.classList.remove("error")
        inputNombre.classList.add("valido")
    }

})

inputTelefono.addEventListener("change", () => {
    let valorTelefono = inputTelefono.value
    console.log(valorTelefono)

    if (isNaN(valorTelefono)) {
        alert("Por favor instroduzca su numero")
        inputTelefono.classList.add("error")
        inputTelefono.classList.remove("valido")
    } else {
        inputTelefono.classList.remove("error")
        inputTelefono.classList.add("valido")
    }

})

inputEmail.addEventListener("change", () => {
    let valorMail = inputEmail.value
    console.log(valorMail)

    if (valorMail.length <= 3) {
        alert("Email Invalido")
        inputEmail.classList.add("error")
        inputEmail.classList.remove("valido")
    } else {
        inputEmail.classList.remove("error")
        inputEmail.classList.add("valido")
    }

})

//submit

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    Swal.fire({
        title: 'Sus datos son los correctos?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, avanzar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Pedido Confirmado!',
                'Sus datos acaban de ser enviados',
                'success'
            )
            let datoNombre = inputNombre.value
            let datoTelefono = inputTelefono.value
            let datoMail = inputEmail.value
            formulario.submit()
            localStorage.setItem("nombreUsuario", datoNombre);
            localStorage.setItem("telefonoUsuario", datoTelefono);
            localStorage.setItem("mailUsuario", datoMail);
        }
    })
})




//NEWSLETTER EN INICIO

$("#btnSuscrip").click(function() {
    suscribir();
});


function suscribir() {
    $("#suscrip").append(`
    <form class="mt-4" id="miNew">
    <input type="email" id="mail" placeholder="Aqui tu E-mail">
    <button type="submit" class="btn btn-dark">Suscribirse ahora</button>
    </form>`);

    //Evento Submit
    $("#miNew").submit(function(e) {
        e.preventDefault();
        Swal.fire(
            "Bienvenido!! recibiras semanalmente nuestras ofertas a",
            $("#mail").val(),
            "success"
        )
        $("#miNew").empty();
    })
}


//NEWSLETTER EN EMPRESA

$("#btnSuscrip2").click(function() {
    suscribir2();
});


function suscribir2() {
    $("#suscrip2").append(`
    <form id="miNew2">
    <input type="email" id="mail2" placeholder="Aqui tu E-mail">
    <button type="submit" class="btn btn-dark">Subribirse ahora</button>
    </form>`);
    //Evento Submit

    $("#miNew2").submit(function(e) {
        e.preventDefault();
        Swal.fire(
            "Bienvenido!! recibiras semanalmente nuestras ofertas a",
            $("#mail2").val(),
            "success"
        )
        $("#miNew2").empty();
    })
}