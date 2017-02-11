var Pessoa = require('../models/pessoa');

var pessoaRepository = { };

pessoaRepository.salvarPessoa = function (pessoa, callback) {

    var pessoaTeste = new Pessoa({
        nome: "enzo",
        idade: 21
    });

    pessoaTeste.save(function (error, doc, rows) {
        callback(error, doc, rows);
    });
}

module.exports = pessoaRepository;