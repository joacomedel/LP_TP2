fetch("/json/libreriaDatos.json").then(response => response.json()).then(param => cargarHeader(param));
function cargarHeader(arregloLibrerias) {
    const lista = document.querySelector('.divDescargasHeader ul');
    arregloLibrerias.forEach(libreria => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        lista.appendChild(li);
        li.appendChild(a);
        a.textContent = libreria.titulo;
        const tituloSinEspacios = libreria.titulo.replace(/\s/g, '');
        a.href = "Descargas/" + tituloSinEspacios + ".html";
    });

}