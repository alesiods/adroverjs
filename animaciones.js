//ANIMACION

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


$("#finalizarCompra").click(function() {
    $("#formularioDatos").fadeIn()
})