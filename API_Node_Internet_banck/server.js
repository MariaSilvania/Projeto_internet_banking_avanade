const express = require('express')
const bodyParser = require('body-parser')

const server = express()
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

let listaExtrato = [
	{
		"id": 1,
		"data": "2010-12-07",
		"doc": "0000",
		"historico": "saldo anterior",
		"valor": 0.00
	},
	{
		"id": 2,
		"data": "2010-12-10",
		"doc": "0000",
		"historico": "Saldo",
		"valor": 190.00
	},
	{
		"id": 3,
		"data": "2010-11-10",
		"doc": "198600",
		"historico": "Rem basica",
		"valor": 100.00
	}
];


server.get('/api/extratos', function (req, res) {
	console.log('get')
	res.json(listaExtrato);
});

server.listen(3000, function () {
	console.log("NEW API - port " + 3000)
});