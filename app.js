var express = require('express');
var app = express();

// app.get('/', function(request, response){
// 	response.send('hello Mijow');
// });

// app.get('/',function(request,response){
// 	response.write('Perrow');
// 	response.end();
// });

app.get('/',function(request,response){
	response.sendFile(__dirname+'/public/index.html');
});

app.get('/bliss',function(request, response){
	var bliss = ['Héctor', 'Feliciano','Campos', 'Muñoz'];
	response.send(bliss);
});

app.get('/bliss2',function(request, response){
	var bliss = ['Héctor', 'Feliciano','Campos', 'Muñoz'];
	response.json(bliss);
});

app.get('/bliss3',function(request, response){
	response.redirect(301,'/perra');
});









app.listen(80, function(){
	console.log('Escuchando en el puerto 80');
});
