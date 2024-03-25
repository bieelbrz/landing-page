function exibirMensagem(){
    alert("Seu item foi adicionado ao carrinho!");
}

var botao = document.getElementById("adicionarAoCarrinho");

botao.addEventListener("click", exibirMensagem);
