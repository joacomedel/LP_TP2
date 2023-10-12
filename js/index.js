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
    console.log(indice);
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