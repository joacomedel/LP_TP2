fetch("/json/libreriaDatos.json").then(response => response.json()).then(libreriaDatos => cargarDatos(libreriaDatos));

function cargarDatos(libreriaDatos) {
    const img = document.querySelector('.contenedorDescargas div a img');
    const tituloSinEspacios = libreriaDatos.titulo.replace(/\s/g, '');
    img.src = "/assets/" + tituloSinEspacios + ".png";
    const titulo = document.querySelector('.contenedorDescargas div a h2');
    titulo.textContent = libreriaDatos.titulo;
    const link = document.querySelector('.contenedorDescargas div a');
    console.log(link);
    link.href = "Descargas/" + tituloSinEspacios + ".html";
}