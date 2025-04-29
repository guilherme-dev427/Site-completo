function aumentarFonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = (tamanhoAtual + 5) + "px";
    });
}
function diminuirFonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = (tamanhoAtual - 5) + "px";
    });
}

function toggleContraste() {
    const body = document.body;
    const modoAtivo = body.classList.toggle("alto-contraste");
    localStorage.setItem("modoContraste", modoAtivo ? "ativado" : "desativado");
}

window.onload = function () {
    if (localStorage.getItem("modoContraste") === "ativado") {
        document.body.classList.add("alto-contraste");
    }
};
