const readline = require('readline-sync')
const funcionalidades = require('./armazenadorDeVotos')
let dados = require('./dados.json')

console.log('~~~~~~VOTAÇÃO INICIADA~~~~~~\n');

let i = 0
while(2 > i){
    funcionalidades.imprimirMenu() // imprime menu 

    let choice = readline.questionInt('   Digite: ') // Recebe dados do teclado

    i = funcionalidades.terminarWhile(choice) // Testa se eu terminei o programa
    console.log('\n');

    dados.candidatos = funcionalidades.armazenar(choice, dados.candidatos) //Adiciona e armazena meu voto

    funcionalidades.substituirNoArquivo(dados)// Sobescreve novo arquivo
}
const vencedor = funcionalidades.verificarVencedor(dados.candidatos) // Armazena o vencedor numa constante

console.log(vencedor);// Mostra quem venceu e a quantidade de votos

funcionalidades.zerarVotos(dados)// Zera a quantidade de votos de todos os candidatos

console.log('~~~~~~VOTAÇÃO ENCERRADA~~~~~~');