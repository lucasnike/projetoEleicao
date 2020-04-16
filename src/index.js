const readline = require('readline-sync')
const funcionalidades = require('./armazenadorDeVotos')
let dados = require('./dados.json')
console.log('~~~~~~VOTAÇÃO INICIADA~~~~~~\n');
let i = 0
while(2 > i){
    console.log('   ----------------------');
    console.log(`   |[1] ${dados.candidatos[0].nome}       |`);
    console.log('   ----------------------');
    console.log(`   |[2] ${dados.candidatos[1].nome}  |`);
    console.log('   ----------------------');
    console.log(`   |[3] ${dados.candidatos[2].nome}            |`);
    console.log('   ----------------------');
    console.log('   |[9] Encerrar votação|');
    console.log('   ----------------------\n');
    let choice = readline.questionInt('   Digite: ')
    i = funcionalidades.terminarWhile(choice) 
    console.log('\n');
    dados.candidatos = funcionalidades.armazenar(choice, dados.candidatos)
    funcionalidades.substituirNoArquivo(dados)
}
const vencedor = funcionalidades.verificarVencedor(dados.candidatos)
console.log(`O vencedor é ${vencedor.nome} com ${vencedor.votos}\n`);
funcionalidades.zerarVotos(dados)
console.log('~~~~~~VOTAÇÃO ENCERRADA~~~~~~');