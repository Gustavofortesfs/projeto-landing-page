var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setadireita = window.document.getElementById("seta-direita")
var setaesquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none;"
    Bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:80px"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:flex;"
    Bruna.style = "display:none"
    setadireita.style = "display:flex; margin-top:50px"
    setaesquerda.style = "display:none"
}