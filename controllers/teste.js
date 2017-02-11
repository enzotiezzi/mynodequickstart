var express = require('express');
var router = express.Router();
var pessoaRepository = require('../repositories/pessoa-repository');


router.get('/', function (req, res) {
	pessoaRepository.salvarPessoa(req, function(err, doc, rows){
		res.send("criou");
	});
});

module.exports = router;