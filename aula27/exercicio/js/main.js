function alterarConteudo(x) {
    conteudo.innerHTML = (window[x]());
    //vai atualizar a div#conteudo com o retorno da função.
}