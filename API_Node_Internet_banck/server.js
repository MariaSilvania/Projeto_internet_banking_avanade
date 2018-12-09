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
		"data": "2018-12-01",
		"doc": "000000",
		"historico": "saldo anterior",
		"valor": 0.00,
		"tipo":""
	},
	{
		"id": 2,
		"data": "2018-12-01",
		"doc": "086776",
		"historico": "DP DINH AG",
		"valor": 190.00,
		"tipo": "C"
	},
	{
		"id": 3,
		"data": "2018-12-02",
		"doc": "198760",
		"historico": "DEB PAG",
		"valor": 26.15,
		"tipo": "D"
	},
	{
		"id": 4,
		"data": "2018-12-05",
		"doc": "221137",
		"historico": "DOC ELET",
		"valor": 100.00,
		"tipo": "C"
	},
	{
		"id": 5,
		"data": "2018-12-09",
		"doc": "781075",
		"historico": "PAG FONE",
		"valor": 44.88,
		"tipo": "D"
	},
	{
		"id": 6,
		"data": "2018-12-10",
		"doc": "198600",
		"historico": "DE DIN LOT",
		"valor": 300.00,
		"tipo": "C"
	}
];


server.get('/api/extratos', function (req, res) {
	console.log('get')
	res.json(listaExtrato);
});

server.listen(3000, function () {
	console.log("NEW API - port " + 3000)
});