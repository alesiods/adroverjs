//ANIMACION

//Scroll del menu o nav
$("#scroll").click(function() {
    $("html").animate({
        scrollTop: $("#contacto").offset().top
    }, 1000);
})

$("#scrolleo").click(function() {
    $("html").animate({
        scrollTop: $("#productos").offset().top
    }, 1000);
})

//Aparicion del formulario cuando se apreta el boton "finalizar compra"
$("#finalizarCompra").click(function() {
    $("#formularioDatos").fadeIn()
})