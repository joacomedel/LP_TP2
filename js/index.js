fetch("/json/juegos.json").then(response => response.json()).then(param => cargarDatos(param));
let juegosDatos;
let indice = 0;
function cargarDatos(param) {
    juegosDatos = param
    cargarBiblioteca(indice);
}
function cargarBiblioteca(i) {
    const imagen = document.querySelector('.divImagen img');
    let tituloSinEspacios = juegosDatos[i].titulo.replace(/\s/g, '');
    imagen.src = "/assets/" + tituloSinEspacios + ".png";
    const titulo = document.querySelector('.titJuego');
    titulo.textContent = juegosDatos[i].titulo;
    const parrafo = document.querySelector('.pJuego');
    parrafo.textContent = juegosDatos[i].parrafo;
    const link = document.querySelector('.botonDescargar');
    link.href = "Descargas/" + tituloSinEspacios + ".html";
}