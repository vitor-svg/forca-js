const palavra = "CASA";
let letrasCorretas = [];
let erros = 0;
let jogoFinalizado = false;

// Mostra a palavra escondida ao carregar a página
mostrarPalavra();

function mostrarPalavra() {

    let resultado = "";

    for (let i = 0; i < palavra.length; i++) {

        if (letrasCorretas.includes(palavra[i])) {
            resultado += palavra[i] + " ";
        } else {
            resultado += "_ ";
        }

    }

    document.getElementById("palavra").innerHTML = resultado;

    verificarVitoria();
}

function verificarVitoria() {

    let venceu = true;

    for (let i = 0; i < palavra.length; i++) {

        if (!letrasCorretas.includes(palavra[i])) {
            venceu = false;
        }

    }

    if (venceu) {

        document.getElementById("mensagem").innerHTML =
        "🎉 Você venceu!";

        jogoFinalizado = true;
    }
}

function jogar() {

    if (jogoFinalizado) {
        return;
    }

    let letra = document.getElementById("letra").value.toUpperCase();

    if (letra === "") {

        document.getElementById("mensagem").innerHTML =
        "Digite uma letra!";

        return;
    }

    if (palavra.includes(letra)) {

        if (!letrasCorretas.includes(letra)) {

            letrasCorretas.push(letra);

        }

        document.getElementById("mensagem").innerHTML =
        "Você acertou uma letra!";

    } else {

        erros++;

        document.getElementById("mensagem").innerHTML =
        "A letra não existe na palavra!";

        document.getElementById("erros").innerHTML =
        "Erros: " + erros + "/6";

        if (erros >= 6) {

            document.getElementById("mensagem").innerHTML =
            "💀 Você perdeu!";

            jogoFinalizado = true;
        }
    }

    mostrarPalavra();

    document.getElementById("letra").value = "";
}