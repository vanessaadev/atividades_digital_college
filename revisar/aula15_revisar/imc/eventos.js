function calcularIMC() { //calcularIMC é o nome da function
    event.preventDefault(); //não deixar fazer coisas que ele quer fazer,
    let mPeso = Number(peso.value); //id que a gente colocou lá no input do html
    let mAltura = Number(altura.value);
    let imc = (mPeso / (mAltura * mAltura)).toFixed(1);

    if(mPeso == 0) {
        alert("Peso Inválido!");
        return; //se cair nessa condição volte para o início.
    }

    if(mAltura == 0) {
        alert("Altura Inválida!")
        return; 
    }

    if(imc <= 18.5) {
        alert("Abaixo do Peso: " + imc);
    } else if(imc > 18.5 && imc <= 24.9) {
        alert("Peso Médio: " + imc);
    } else if(imc > 24.9 && imc <= 29.9) {
        alert("Acima do Peso: " + imc);
    } else if(imc > 29.9 && imc <= 34.9) {
        alert("Obesidade grau I: " + imc)
    } else if(imc > 34.9 && imc <= 39.9) {
        alert("Obesidade grau II: " + imc)
    } else {
        alert("Obesidade grau III: " + imc)
    }
}