fetch("/json/juegos.json").then(response => response.json()).then(param => postFetch(param));
let juegosDatos;
let indice = 0;
function postFetch(param) {
    juegosDatos = param
    cargarBiblioteca(indice);
    setearBotones();

}
function setearBotones() {
    document.querySelector('#bDer').onclick = sumarIndex;
    document.querySelector('#bIzq').onclick = restarIndex;
}
function sumarIndex() {
    moverIndex(+1);
}
function restarIndex() {
    moverIndex(-1);
}
function moverIndex(i) {
    indice = (indice + i + juegosDatos.length) % juegosDatos.length;
    cargarBiblioteca(indice);
}
function cargarBiblioteca(i) {
    const imagen = document.querySelector('.divCarrusel img');
    let tituloSinEspacios = juegosDatos[i].titulo.replace(/\s/g, '');
    imagen.src = "/assets/" + tituloSinEspacios + ".png";
    const titulo = document.querySelector('.titJuego');
    titulo.textContent = juegosDatos[i].titulo;
    const parrafo = document.querySelector('.pJuego');
    parrafo.textContent = juegosDatos[i].parrafo;
    const link = document.querySelector('.botonDescargar');
    link.href = "Juegos/" + tituloSinEspacios.toLowerCase() + ".html";
}

function ajustarCuadrado() {
    const height = document.querySelector(".divImagen").clientHeight;
    cons
    document.querySelector(".divImagen img").style.height = height + "px";


}