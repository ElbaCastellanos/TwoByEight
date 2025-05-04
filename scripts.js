// Submenús desplegables que solo abren hacia abajo
document.querySelectorAll('.menu-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        const submenu = this.nextElementSibling;
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            submenu.style.maxHeight = submenu.style.display === 'block' ? submenu.scrollHeight + "px" : "0";
        }
    });
});

function ordenar() {
    const cajas = document.querySelectorAll('.cajita'); // Selecciona todas las cajas
    const footer = document.getElementById('footer'); // Selecciona el footer
    const w = window.innerWidth * 0.8;
    const h = window.innerHeight;
    const separador = 20;

    const Ancho_Sin_Separadores = w - separador * 4;
    const Lado_Caja = Ancho_Sin_Separadores / 3; // 3 columnas

    let xx = separador;
    let yy = separador;

    cajas.forEach((caja, index) => {
        caja.style.width = `${Lado_Caja}px`;
        caja.style.height = `${Lado_Caja}px`;

        caja.style.left = `${xx}px`;
        caja.style.top = `${yy}px`;

        // Mover a la siguiente fila cada 3 cajas
        if ((index + 1) % 3 === 0) {
            yy += Lado_Caja + separador;
            xx = separador;
        } else {
            xx += Lado_Caja + separador;
        }
    });

    // Ajustar la posición del footer debajo de las 2 filas
    footer.style.left = `${separador}px`;
    footer.style.top = `${yy + Lado_Caja + separador}px`;
}


window.addEventListener('resize', ordenar);
window.addEventListener('load', ordenar);


// Mostrar/ocultar menú hamburguesa
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Activa/desactiva la clase 'active' para mostrar/ocultar el menú
});

