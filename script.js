const palavra = "CASA";

function jogar(){
    let letra = document.getElementById("letra").value;

    if(palavra.includes(letra.toUpperCase())){
        document.getElementById("mensagem").innerHTML =
        "A letra existe na palavra!";
    }else{
        document.getElementById("mensagem").innerHTML =
        "A letra não existe na palavra!";
    }
}