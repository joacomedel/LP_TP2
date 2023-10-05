fetch("/json/libreriaDatos.json").then(response => response.json()).then(arregloLibrerias => cargarDatos(arregloLibrerias));

function cargarDatos(arregloLibrerias) {
    const contenedorDescargas = document.querySelector('.contenedorDescargas');
    for (let index = 0; index < arregloLibrerias.length; index++) {
        const libreria = arregloLibrerias[index];
        const div = document.createElement("div");
        contenedorDescargas.appendChild(div);
        const link = document.createElement("a");
        div.appendChild(link);
        const img = document.createElement("img");
        link.appendChild(img);
        const titulo = document.createElement("h2");
        link.appendChild(titulo);
        const tituloSinEspacios = libreria.titulo.replace(/\s/g, '');
        img.src = "/assets/" + tituloSinEspacios + ".png";
        titulo.textContent = libreria.titulo;
        link.href = "Descargas/" + tituloSinEspacios + ".html";
    }

}