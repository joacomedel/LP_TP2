function insertComponent(nameComp, fath) {

    fetch('../' + nameComp + '/' + nameComp + '.html')
        .then(res => res.text())
        .then(
            function (htmlStr) {
                loadDependencies(nameComp);
                const div = document.createElement('div');
                div.innerHTML = htmlStr;
                fath.appendChild(div);
            }
        );
}
function insertComponentFirst(nameComp, fath) {

    fetch('../' + nameComp + '/' + nameComp + '.html')
        .then(res => res.text())
        .then(
            function (htmlStr) {
                loadDependencies(nameComp);
                const div = document.createElement('div');
                div.innerHTML = htmlStr;
                fath.insertBefore(div.firstChild, fath.firstChild);
            }
        );
}
function loadDependencies(nameComp) {
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = '../' + nameComp + '/' + nameComp + '.css';
    document.querySelector('head').appendChild(cssLink);
    const jsScript = document.createElement('script');
    jsScript.src = '../' + nameComp + '/' + nameComp + '.js'
    document.querySelector('body').appendChild(jsScript);
}
