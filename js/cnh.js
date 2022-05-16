function verificarIdade() {
    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    if (idade.value.length == 0) {
        alert('idade é obrigatório.')
        return
    }


var idadeNum = parseInt(idade.value)


if(idadeNum >= 18){
    alert('Ok, Você pode tirar a sua CNH.')
}
else{
   alert('Você é menor de idade, porem não pode tirar a sua CNH.') 
}
}