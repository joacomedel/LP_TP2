fetch("/json/juegos.json").then(response => response.json()).then(param => cargarHeader(param));

function cargarHeader(arregloJuegos) {
    const lista = document.querySelector('.divJuegosHeader ul');
    arregloJuegos.forEach(libreria => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        lista.appendChild(li);
        li.appendChild(a);
        a.textContent = libreria.titulo;
        const tituloSinEspacios = libreria.titulo.replace(/\s/g, '');
        a.href = "Descargas/" + tituloSinEspacios + ".html";
    });

}