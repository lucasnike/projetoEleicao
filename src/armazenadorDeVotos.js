const fs = require('fs')
let dados = require('./dados.json')

// Verifica qual candidato foi escolhido, adiciona mais 1 voto e retorna o array modificado
function armazenar(candidateIndex, candidateArray) { 
    if(candidateIndex === 1) candidateArray[candidateIndex - 1].votos += 1
    if(candidateIndex === 2) candidateArray[candidateIndex - 1].votos += 1
    if(candidateIndex === 3) candidateArray[candidateIndex - 1].votos += 1
    if(candidateIndex !== 1 && candidateIndex !== 2 && candidateIndex !== 3 && candidateIndex !== 9){
        console.log('   ================\n');
        console.log('   Número inválido\n');
        console.log('   ================\n');
    }
    
    return candidateArray
}

// Verfica opção de terminar votação e retorna o número 2 para quebrar o While
function terminarWhile(candidateIndex) {
    if(candidateIndex == 9) return 2
    return 0
}

// Pega o resultado de um novo voto e salva no arquivo a cada repetição
function substituirNoArquivo(dados) {
    fs.writeFileSync(__dirname + '/dados.json', JSON.stringify(dados))
    return dados
}

// Verifica qual candidato tem mais votos e retorna o vencedor
function verificarVencedor(candidatesArray) {
    return candidatesArray[0].votos > candidatesArray[1].votos ? candidatesArray[0] : candidatesArray[1]
}

// Zera a quantidade de votos dos candidatos e armazena no arquivo
function zerarVotos(dados) {
    for(let i = 0; i < dados.candidatos.length; i++){
        dados.candidatos[i].votos = 0
    }
    return substituirNoArquivo(dados)
}

function imprimirMenu() {
    console.log('   ----------------------');
    console.log(`   |[1] ${dados.candidatos[0].nome}       |`);
    console.log('   ----------------------');
    console.log(`   |[2] ${dados.candidatos[1].nome}  |`);
    console.log('   ----------------------');
    console.log(`   |[3] ${dados.candidatos[2].nome}            |`);
    console.log('   ----------------------');
    console.log('   |[9] Encerrar votação|');
    console.log('   ----------------------\n');
}
// Exporta todas as funções para outros modulos
module.exports = {
    armazenar,
    substituirNoArquivo,
    verificarVencedor,
    zerarVotos,
    terminarWhile,
    imprimirMenu
}