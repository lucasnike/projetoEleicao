const fs = require('fs')

const dados = require('./eu.json')

dados.idade = 25

fs.writeFile(__dirname + '/eu.json', JSON.stringify(dados), err => {
    console.log(err || 'Arquivo salvo');
})