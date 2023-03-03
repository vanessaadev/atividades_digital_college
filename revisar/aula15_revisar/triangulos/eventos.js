let ladoA = prompt("Qual o lado A?");
let ladoB = prompt("Qual o lado B?");
let ladoC = prompt("Qual o lado C?");

if (ladoA == ladoB && ladoB == ladoC) {
    alert("é um equilátero")
} else if (ladoA != ladoB && LadoB != ladoC && ladoC != ladoA) {
    alert('é um Escaleno')
} else {
    alert("é um isósceles")
}