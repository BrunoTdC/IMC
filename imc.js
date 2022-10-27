function enviar(){

    let nome = document.getElementById('nome').value
    let tamanho = document.getElementById('tamanho').value
    let peso = document.getElementById('peso').value
    let res = document.getElementById('res')

   let soma = parseInt(peso) / (parseFloat(tamanho) * parseFloat(tamanho))
    let somaF = soma.toFixed(2);
    if(soma < 18.5){
        res.innerText = `Olá ${nome} seu IMC deu ${somaF}, você esta abaixo do peso.`
    }else if((soma > 18.5) && (soma < 24.9)){
        res.innerText = `Olá ${nome} Parabéns seu IMC deu ${somaF}, você esta com peso ideal.`
    }else if((soma > 25) && (soma < 29.9)){
        res.innerText = `Olá ${nome} seu IMC deu ${somaF}, você esta acima do peso.`
    }else if (soma > 30){
        res.innerText = `Olá ${nome} seu IMC deu ${somaF}, você esta muito acima do peso ( CUIDADO OBESIDADE! ).`
    }
}