const calcular = document.getElementById('calcular');

function imc() {

    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorImc = (peso / (altura * altura)).toFixed(1);

        let posicao = ''
        
        if (valorImc < 18.5) {
            posicao = 'abaixo do peso'
        } else if (valorImc < 25) {
            posicao = 'com o peso ideal, sucesso!'
        } else if (valorImc < 30) {
            posicao = 'levemente acima do peso'
        } else if (valorImc < 35) {
            posicao = 'com obesidade grau I'
        } else if (valorImc < 40){
            posicao ='com obesidade grau II'
        } else {
            posicao = 'com obesidade grau III'
        }

        resultado.textContent = `${nome}, seu IMC é ${valorImc} e você está ${posicao}.`

       
    } else {
        resultado.textContent = "Preencha todos os campos"
    }



}

calcular.addEventListener('click', imc);