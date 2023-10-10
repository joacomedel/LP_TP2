fetch("/json/juegos.json").then(response => response.json()).then(param => { postFetch(param) });
function postFetch(param) {
    cargarDatos(param);
    setTamanios();
    window.addEventListener('resize', setTamanios);
}
function cargarDatos(arregloJuegos) {
    const contenedorJuegos = document.querySelector('.contenedorJuegos');
    console.log(contenedorJuegos);
    contenedorJuegos.stylesHeight = "400px"
    for (let index = 0; index < arregloJuegos.length; index++) {
        const juego = arregloJuegos[index];
        const div = document.createElement("div");
        contenedorJuegos.appendChild(div);
        const link = document.createElement("a");
        div.appendChild(link);
        const img = document.createElement("img");
        link.appendChild(img);
        const titulo = document.createElement("h2");
        link.appendChild(titulo);
        const tituloSinEspacios = juego.titulo.replace(/\s/g, '');
        img.src = "/assets/" + tituloSinEspacios + ".png";
        titulo.textContent = juego.titulo;
        link.href = "Descargas/" + tituloSinEspacios + ".html";
    }

}

function setTamanios() {

    const primerDiv = document.querySelector('.contenedorJuegos div:first-child');
    const height = primerDiv.clientHeight;
    const width = primerDiv.clientWidth;
    const ultimoDiv = document.querySelector('.contenedorJuegos  div:last-child');
    console.log(ultimoDiv);
    ultimoDiv.style.maxWidth = width + "px";
    ultimoDiv.style.maxHeight = height + "px";
    console.log("________");
}