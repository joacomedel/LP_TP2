fetch("/json/juegos.json").then(response => response.json()).then(param => cargarDatos(param));
let libreriaDatos;
let indice = 0;
function cargarDatos(param) {
    libreriaDatos = param
    cargarBiblioteca(indice);
}
function cargarBiblioteca(i) {
    const imagen = document.querySelector('.divImagen img');
    let tituloSinEspacios = libreriaDatos[i].titulo.replace(/\s/g, '');
    imagen.src = "/assets/" + tituloSinEspacios + ".png";
    const titulo = document.querySelector('.titJuego');
    titulo.textContent = libreriaDatos[i].titulo;
    const parrafo = document.querySelector('.pJuego');
    parrafo.textContent = libreriaDatos[i].parrafo;
    const link = document.querySelector('.botonDescargar');
    link.href = "Descargas/" + tituloSinEspacios + ".html";
}