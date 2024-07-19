$(document).ready(function() {
    // Mensaje de bienvenida
    alert("Bienvenido(a) a Viajes Chile");

    // Manejo del botón de envío
    $(".btn").click(function() {
        alert("El mensaje ha sido enviado correctamente");
    });

    // Mostrar y ocultar texto en las tarjetas
    $(".card-title").click(function() {
        $(".card-text2").toggle();    
    });

    // Estilos de los enlaces de navegación
    $(".nav-link").on('click', function(event) {
        // Eliminar el estilo de los enlaces previamente seleccionados
        $(".nav-link").not(this).css({
            "font-weight": "normal",
            "font-size": "16px",
            "color": "#ffffff"
        });

        // Aplicar estilo al enlace actual
        $(this).css({
            "font-weight": "bold",
            "font-size": "18px",
            "color": "#ffffff"
        });
    });

    // Animación de desplazamiento suave para enlaces con hash
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Inicialización de tooltips de Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
