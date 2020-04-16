const fs = require('fs')


function armazenar(candidateIndex, candidateArray) {
    if(candidateIndex === 1) candidateArray[candidateIndex - 1].votos += 1
    if(candidateIndex === 2) candidateArray[candidateIndex - 1].votos += 1
    if(candidateIndex === 3) candidateArray[candidateIndex - 1].votos += 1
    if(candidateIndex !== 1 && candidateIndex !== 2 && candidateIndex !== 3 && candidateIndex !== 9) console.log('Número inválido');
    return candidateArray
}

function terminarWhile(candidateIndex) {
    if(candidateIndex == 9) return 2
    return 0
}

function substituirNoArquivo(dados) {
    fs.writeFileSync(__dirname + '/dados.json', JSON.stringify(dados))
    return dados
}

function verificarVencedor(candidatesArray) {
    return candidatesArray[0].votos > candidatesArray[1].votos ? candidatesArray[0] : candidatesArray[1]
}

function zerarVotos(dados) {
    for(let i = 0; i < dados.candidatos.length; i++){
        dados.candidatos[i].votos = 0
    }
    return substituirNoArquivo(dados)
}
module.exports = {
    armazenar,
    substituirNoArquivo,
    verificarVencedor,
    zerarVotos,
    terminarWhile
}