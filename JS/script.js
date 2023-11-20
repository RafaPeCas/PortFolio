function cambiar() {

    if (onOff.classList.contains('off')) {
        onOff.classList.remove('off');
        onOff.classList.add('on');
        derecha.classList.remove("oculto");
        izquierda.classList.remove("oculto");
        filtro.classList.remove("oculto");
    } else {
        onOff.classList.remove('on');
        onOff.classList.add('off');
        derecha.classList.add("oculto");
        izquierda.classList.add("oculto");
        filtro.classList.add("oculto");
    }

    if (tv.classList.contains("oculto")) {
        tv.classList.remove("oculto");
    } else {
        tv.classList.add("oculto")
        tv.style.background = "red"
    }

    telesound.play();

};

let i = 0;
function canales(gax) {
    let imagenes = {
        "img/minas.png": ["Buscador de minas", "https://view.genial.ly/638c6eb5bbff690017976335/presentation-presentacion-proyeccion"],
        "img/misterio_nuestro.png": ["Misterio Nuestro", "https://view.genial.ly/64122587b692cc001366b7a7/presentation-misterio-nuestro"],
        "img/nuestro_misterio.png": ["Nuestro Misterio", "https://view.genial.ly/646cecebf438b10011c6b7dc/presentation-nuestro-misterio"]
    };
    let keys = Object.keys(imagenes);

    i += gax;

    if (i > keys.length - 1) i = 0;
    if (i < 0) i = keys.length - 1;

    let imagenActual = keys[i];

    canal.src = imagenActual;
    descripciontv.textContent = imagenes[imagenActual][0];
    enlace.href=imagenes[imagenActual][1];
}