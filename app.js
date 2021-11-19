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

class productoCarrito {
    constructor(obj) {
        this.id = obj.id;
        this.nombre = obj.nombre;
        this.precio = obj.precio;
        this.imagen = obj.imagen;
        this.cantidad = 1;
    }
}

//Agregado de productos al carrito y en la tabla

function agregarAlCarrito(productoAgregado) {
    let encontrado = carrito.find(prod => prod.id == productoAgregado.id);
    if (encontrado == undefined) {
        let productoAAgregar = new productoCarrito(productoAgregado);
        carrito.push(productoAAgregar);
        console.log(carrito);
        Swal.fire(
            "Agregaste a tu carrito:",
            productoAgregado.nombre,
            "success"
        );
        $("#tablabody").append(`
    <tr>
        <td>${productoAgregado.id}</td>
        <td>${productoAgregado.nombre}</td>
        <td id='${productoAAgregar.id}'>${productoAAgregar.cantidad}</td>
        <td>${productoAgregado.precio}</td>
    </tr>`);
    } else {
        let posicion = carrito.findIndex(p => p.id == productoAgregado.id);
        carrito[posicion].cantidad += 1;
        $(`#${productoAgregado.id}`).html(carrito[posicion].cantidad);
        console.log(carrito);

    }
    sumarCompra();
    localStorage.setItem("miCarrito", JSON.stringify(carrito));
}

//Sumado de total

const sumarCompra = () => {
    let total = 0
    for (const produ of carrito) {
        total += produ.precio;
        console.log(total);
        tot.innerText = total;
    }
};

// Ubicacion de esa suma en el DOM

$("#totalCompra").append(`
<span id="tot"></span>
`);



//FORMULARIO

//Inputs

const inputNombre = document.getElementById("nombre")

const inputEmail = document.getElementById("email")

const inputTelefono = document.getElementById("telefono")

inputNombre.addEventListener("change", () => {
    const valorNombre = inputNombre.value
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
    const valorTelefono = inputTelefono.value
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
    const valorMail = inputEmail.value
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

    const validaciones = prompt("Son datos son correctos?")

    if (validaciones == "si") {

        formulario.submit()
    }
})



//ANIMACION

$("#scroll").click(function() {
    $("html").animate({
        scrollTop: $("#contacto").offset().top
    }, 1000);
})

$("#scroll").click(function() {
    $("html").animate({
        scrollTop: $("#productos").offset().top
    }, 1000);
})