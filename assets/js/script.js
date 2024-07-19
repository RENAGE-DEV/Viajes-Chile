
$(document).ready(function(){
    alert("Bienvenido(a) a Viajes Chile");

    $(".btn").click(function(){
        alert("El mensaje ha sido enviado correctamente")
    });

    $(".card-title").click(function(){
    $(".card-text2").toggle();    
    });

});

$(document).ready(() => {
    // enlace de navegación
    $(".nav-link").on('click', (event) => {
        // estilos 
        $(event.currentTarget).css({
            "font-weight": "bold",
            "font-size": "18px",
            "color": "#0044ff"
        });
    });
});




$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });
});

<button type="button" class="btn btn-secondary"
        data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables.">
  Custom tooltip
</button>


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))