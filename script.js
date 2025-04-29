function aumentarFonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = (tamanhoAtual + 5) + "px";
    });
}
function ativarContraste() {
    document.body.style.filter = "invert(1) hue-rotate(180deg)";
    localStorage.setItem("contrasteAtivo", "true");
    document.body.style.backgroundColor = "black";
}

function desativarContraste() {
    document.body.style.filter = "none";
    localStorage.setItem("contrasteAtivo", "false");
    document.body.style.backgroundColor = "yellow";
}

window.addEventListener("load", function () {
    const contrasteAtivo = localStorage.getItem("contrasteAtivo") === "true";
    if (contrasteAtivo === "true") {
        ativarContraste();
    } else {
        desativarContraste();
    }
});