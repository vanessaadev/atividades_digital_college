function buscarCEP() {
    fetch(`https://viacep.com.br/ws/${cep.value}/json`) //com crase conseguimos nos conectar com variáveis externas
        .then(function (resposta) { //pedi o resultado
            return resposta.json(); //me retorne só o que eu quero
        }) //a function se torna anonima pois so age enquanto estiver no then
        .then(function (conteudo) {
            // document.getElementById('logradouro')
            logradouro.value = conteudo.logradouro; //meu id logradouro.value vai receber conteudo.logradouro que é o id do json do via cep
            bairro.value = conteudo.bairro;
            cidade.value = conteudo.localidade;
            estado.value = conteudo.uf;
        })
    
}
