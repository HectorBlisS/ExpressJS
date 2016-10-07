var express = require('express');
var app = express();

// Allow cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.get('/', function(request, response){
// 	response.send('hello Mijow');
// });

// app.get('/',function(request,response){
// 	response.write('Perrow');
// 	response.end();
// });

// app.get('/',function(request,response){
// 	response.sendFile(__dirname+'/public/index.html');
// });

app.use(express.static('public'));

app.get('/bliss',function(request, response){
	var bliss = ['Héctor', 'Feliciano','Campos', 'Muñoz'];
	response.send(bliss);
});

app.get('/bliss2',function(request, response){
	var bliss = [{
		nombre:'BlisS',
		edad:29
	},{
		nombre:'Saul',
		edad:15
	},{
		nombre:'Suriel',
		edad:20
	},{
		nombre:'David',
		edad:17
	}]
	response.json(bliss);
});

app.get('/bliss3',function(request, response){
	response.redirect(301,'/perra');
});









app.listen(80, function(){
	console.log('Escuchando en el puerto 80');
});
