// Conectar informações do botão desenvolvido no arquivo HTML
let botao = document.getElementById("botao-topo")

window.onscroll = function scrollFunction () {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
}

function voltarParaTopo () {
  document.documentElement.scrollTop = 0;
}

