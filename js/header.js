fetch("/json/juegos.json").then(response => response.json()).then(param => cargarHeader(param));

function cargarHeader(arregloJuegos) {
    var header = document.createElement("header");
    header.innerHTML = '<nav><div class="espacioLogo"> <a href="/html/index.html" class="anchorLogo" id="seleccionado"><h1>NOMBRE EMPRESA</h1> </a></div> <div class="espacioLinks"> <a href=""> COMPRA MONEDAS </a><div class="divJuegosHeader"><a href="/html/juegos.html">JUEGOS</a><ul class="dropdown"></ul></div><a href="">FAQ</a><a href="">COTIZACION</a></div></nav>';
    document.querySelector("body").insertBefore(header, document.querySelector(".divPrincipal"));
    const lista = document.querySelector('.divJuegosHeader ul');
    arregloJuegos.forEach(libreria => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        lista.appendChild(li);
        li.appendChild(a);
        a.textContent = libreria.titulo;
        const tituloSinEspacios = libreria.titulo.replace(/\s/g, '');
        a.href = "/html/Juegos/" + tituloSinEspacios + ".html";
    });

}

function getHtmlHeader() {
    return
}