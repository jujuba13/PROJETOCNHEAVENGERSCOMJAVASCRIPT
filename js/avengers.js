//Array utilizando API
var avengers = ['Tony Stark', 'Clint Baton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Scort Lang']

function listaVingadores() {

    var ul = document.getElementById('avengers')

    // para não duplicar a lista dos nomes
    ul.innerHTML = ''

    avengers.forEach(function (a) {

        // criar elemento de uma forma dinamica

        var li = document.createElement('li')
        var text = document.createTextNode(a)
        // vincula o texto
       li.appendChild(text)
        // adiciona cada li dentro da lista
        ul.appendChild(li)
    })

}