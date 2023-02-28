let contatos = [
{
    nome: "mariana",
    telefone: "85 9 97990498"
},
{
    nome: "Vanessa",
    telefone: "85 9 97990492"
},
{
    nome: "Andreza",
    telefone: "85 9 97990493"
},
{
    nome: "Larissa",
    telefone: "85 9 97990494"
},
{
    nome: "maritana",
    telefone: "85 9 97990495"
},
{
    nome: "moana",
    telefone: "85 9 97990496"
},
{
    nome: "Leidiana",
    telefone: "85 9 979904978"
},
{
    nome: "Francisca",
    telefone: "85 9 979904978"
},
{
    nome: "Leticiana",
    telefone: "85 9 979904978"
},
{
    nome: "Ticiiana",
    telefone: "85 9 979904978"
}
];

function exibir(cadaContato) {
    lista.innerHTML += `<li><strong> ${cadaContato.nome}: </strong>${cadaContato.telefone}</li>`;  //innerHTML é sempre o conteúdo de uma tag, o += mantem e atribui um novo. 
}

contatos.forEach(exibir);


// for (x = 0; x <= 9; x++) {
//     lista.innerHTML += `<li><strong> ${contatos[x].nome}: </strong>${contatos[x].telefone}</li>`;  //innerHTML é sempre o conteúdo de uma tag, o += mantem e atribui um novo. 
// }

// let nome = "Lane";

//array variavel composta por mais de uma informação