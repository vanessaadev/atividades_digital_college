let idade = prompt("Olá, qual a sua idade?"); /* idade é uma variável, let cria a variável, prompt quer pegar uma informação do usuário  */


alert("Que legal, vc tem " + idade);/*o + concatena ou seja junta uma coisa com a outra, alert mostra uma informação do usuário, confirm se eu quero confirmar uma informação do usuário */

//console.log (); é um prompt também
//const é uma constante que não pode ser modificada
// if (idade < 14) {
//     alert("Você é uma criança");
// } 

// if (idade >= 14 && idade < 18) {
//     alert("Você é um adolescente");
// }

// if (idade >= 18 && idade < 60) {
//     alert("Você é um adulto");
// }

// if (idade >= 60) {
//     alert("Você é um idoso")
// }

// teste 2

// if (idade < 14) {
//     alert("Você é uma criança!")
// } else if (idade >= 14 && idade < 18) {
//     alert("Você é um adolescente")
// } else if (idade >= 18 && idade < 60) {
//     alert("Você é um adulto")
// } else {
//     alert("Você é um idoso")
// }

//teste 3

if (idade < 14) {
    alert("Você é uma criança!")
} else if (idade < 18) {
    alert("Você é um adolescente")
} else if (idade < 60) {
    alert("Você é um adulto")
} else {
    alert("Você é um idoso")
}

