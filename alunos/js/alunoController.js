//READ
function listarAlunos(){
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    let tabela = document.getElementById("tabela-body");
    tabela.innerHTML = "";
    alunos.forEach((aluno, key) => {
        tabela.innerHTML += `<tr>
                                <td>${aluno.id}}</td>
                                <td>${aluno.nome}</td>
                                <td>${aluno.email}</td>
                                <td>${aluno.telefone}</td>
                                <td>${aluno.cidade}</td>
                                <td>
                                    <button class="btn btn-warning">Editar</button>
                                    <button class="btn btn-danger" onClick="deletarAluno(${aluno.id})">Excluir</button>
                                </td>
                            </tr>`;
                        })
                    }

//CREATE
function salvarAluno(){
    event.preventDefault();
    let alunos = JSON.parse(localStorage.getItem('alunos')) || []; //json.parse tranforma texto em um array de objetos
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    } 
    alunos.push(aluno);
    localStorage.setItem('alunos'.JSON.stringify(alunos));
    alert("salvo com sucesso!");
}

//UPDATE
function atualizarAluno() {

};

//DELETE
function deletarAluno(id) {
    fetch(`http://localhost:8000/alunos/${id}`, {
        method: "DELETE",
    })
    .then(res => res.json())
    .then(resposta => {
        alert("Excluido com sucesso!");
        console.log(resposta)
        listarAlunos();
    })
    // let alunos = JSON.parse(localStorage.getItem('alunos')) || []; //json.parse tranforma texto em um array de objetos
    // let alunosAtualizado = [];

    // alunos.forEach((aluno, key) => {
    //     if(id != key){
    //         alunosAtualizado.push(aluno);
    //     }
    // });

    // localStorage.setItem('alunos', JSON.stringify(alunosAtualizado));

    // alert("aluno excluído com sucesso!");

    // listarAlunos();
}
