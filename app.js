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


app.get('/topten',function(req,res){
	var autos = [
		{
			id:'1',
			nombre:'Aveo',
			desc:'elAveo',
			marca:'Chevrolet',
			img:'http://www.grupoautofin.com/PHOTOS/PHOTO100/SSCMEX/CHEVROLET/AVEO/2016/4SA.jpg',
			precio:190000,
			mas_info:'http://www.chevrolet.com.mx/'
		},{
			id:'2',
			nombre:'Spark',
			desc:'elSpark',
			marca:'Chevrolet',
			img:'http://www.grupoautofin.com/PHOTOS/PHOTO100/SSCMEX/CHEVROLET/AVEO/2016/4SA.jpg',
			precio:190000,
			mas_info:'http://www.chevrolet.com.mx/'
		},{
			id:'3',
			nombre:'March',
			desc:'elMarch',
			marca:'Chevrolet',
			img:'http://www.grupoautofin.com/PHOTOS/PHOTO100/SSCMEX/CHEVROLET/AVEO/2016/4SA.jpg',
			precio:190000,
			mas_info:'http://www.chevrolet.com.mx/'
		},{
			id:'4',
			nombre:'Np300',
			desc:'elNP300',
			marca:'Nissan',
			img:'http://www.grupoautofin.com/PHOTOS/PHOTO100/SSCMEX/CHEVROLET/AVEO/2016/4SA.jpg',
			precio:190000,
			mas_info:'http://www.chevrolet.com.mx/'
		},{
			id:'5',
			nombre:'Camry',
			desc:'elCamry',
			marca:'Toyota',
			img:'http://www.grupoautofin.com/PHOTOS/PHOTO100/SSCMEX/CHEVROLET/AVEO/2016/4SA.jpg',
			precio:190000,
			mas_info:'http://www.chevrolet.com.mx/'
		},{
			id:'6',
			nombre:'Chevy',
			desc:'elChevy',
			marca:'Chevrolet',
			img:'http://www.grupoautofin.com/PHOTOS/PHOTO100/SSCMEX/CHEVROLET/AVEO/2016/4SA.jpg',
			precio:190000,
			mas_info:'http://www.chevrolet.com.mx/'
		},{
			id:'7',
			nombre:'Vocho',
			desc:'elVocho',
			marca:'Chevrolet',
			img:'http://www.grupoautofin.com/PHOTOS/PHOTO100/SSCMEX/CHEVROLET/AVEO/2016/4SA.jpg',
			precio:190000,
			mas_info:'http://www.chevrolet.com.mx/'
		},{
			id:'8',
			nombre:'Model3',
			desc:'elModel3',
			marca:'Tesla',
			img:'http://www.grupoautofin.com/PHOTOS/PHOTO100/SSCMEX/CHEVROLET/AVEO/2016/4SA.jpg',
			precio:190000,
			mas_info:'http://www.chevrolet.com.mx/'
		},{
			id:'9',
			nombre:'Versa',
			desc:'elVersa',
			marca:'Nissan',
			img:'http://www.grupoautofin.com/PHOTOS/PHOTO100/SSCMEX/CHEVROLET/AVEO/2016/4SA.jpg',
			precio:190000,
			mas_info:'http://www.chevrolet.com.mx/'
		},{
			id:'10',
			nombre:'Urban',
			desc:'laUrban',
			marca:'Nissan',
			img:'http://www.grupoautofin.com/PHOTOS/PHOTO100/SSCMEX/CHEVROLET/AVEO/2016/4SA.jpg',
			precio:190000,
			mas_info:'http://www.chevrolet.com.mx/'
		}
	];
	res.send(autos);
});

app.get('/bliss3',function(request, response){
	response.redirect(301,'/perra');
});









app.listen(80, function(){
	console.log('Escuchando en el puerto 80');
});
