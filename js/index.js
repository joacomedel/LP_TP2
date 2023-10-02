fetch("/json/libreriaDatos.json").then(response => response.json()).then(libreriaDatos => cargarDatos(libreriaDatos));

function cargarDatos(libreriaDatos) {
    const imagen = document.querySelector('.imagenLibreria img');
    let tituloSinEspacios = libreriaDatos.titulo.replace(/\s/g, '');
    imagen.src = "/assets/" + tituloSinEspacios + ".png";
    const titulo = document.querySelector('.tituloLibreria');
    titulo.textContent = libreriaDatos.titulo;
    const parrafo = document.querySelector('.parrafoLibreria');
    parrafo.textContent = libreriaDatos.parrafo;
    const link = document.querySelector('.botonDescargar');
    link.href = "Descargas/" + tituloSinEspacios + ".html";


}