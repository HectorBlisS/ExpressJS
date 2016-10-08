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
			nombre:'Versa',
			desc:'2017 Drive MT',
			marca:'Nissan',
			img:'http://st.motortrend.com/uploads/sites/10/2015/11/2015-nissan-versa-1.6-sv-auto-sedan-angular-front.png',
			precio:178900,
			mas_info:'https://www.nissan.com.mx/versa/'
		},{
			id:'2',
			nombre:'Tsuru',
			desc:'2017 GSI TM EQP',
			marca:'Nissan',
			img:'https://userscontent2.emaze.com/images/034a686c-1fe5-4d67-b608-f80359c2eb79/b3aedb78-adf3-46eb-a5e3-e3db83324aa2image35.gif',
			precio:142600,
			mas_info:'https://www.nissan.com.mx/tsuru/'
		},{
			id:'3',
			nombre:'March',
			desc:'2017 Sense TM',
			marca:'Chevrolet',
			img:'http://www.unitycarrental.com/wp-content/uploads/car-rental-gallery/1463226906_Nissan-March.png',
			precio:162900,
			mas_info:'https://www.nissan.com.mx/march/'
		},{
			id:'4',
			nombre:'Aveo',
			desc:'2017 LS Manual con AA',
			marca:'Chevrolet',
			img:'http://speed-service.com.mx/wp-content/uploads/2016/01/chevroletaveo.png',
			precio:175900,
			mas_info:'http://www.chevrolet.com.mx/aveo.html'
		},{
			id:'5',
			nombre:'Spark',
			desc:'2017 LT TM',
			marca:'Chevrolet',
			img:'http://st.motortrend.com/uploads/sites/10/2016/07/2017-chevrolet-spark-ls-manual-hatchback-angular-front.png?interpolation=lanczos-none&fit=around%7C660%3A439&crop=660%3A439%3B*%2C*',
			precio:159900,
			mas_info:'http://www.chevrolet.com.mx/spark-2016.html'
		},{
			id:'6',
			nombre:'Sentra',
			desc:'2017 Sense MT',
			marca:'Nissan',
			img:'https://www.nissan-cdn.net/content/dam/Nissan/za/vehicles/sentra/product_code/product_version/overview/1160x600_Sentra-White.png.ximg.s_12_h.smart.png',
			precio:238800,
			mas_info:'https://www.nissan.com.mx/sentra/'
		},{
			id:'7',
			nombre:'Vento',
			desc:'2017 Tiptronic',
			marca:'Volkswagen',
			img:'https://imgct2.aeplcdn.com/img/800x600/car-data/big/volkswagen-vento-default-image.png-version2016093012.png',
			precio:179990,
			mas_info:'http://www.vw.com.mx/es/models/vento/vento.html'
		},{
			id:'8',
			nombre:'NP300',
			desc:'2017 Chasis Cabina',
			marca:'Nissan',
			img:'http://www.autoasesor.com/nissan/imagenes/np300senc.png',
			precio:209600,
			mas_info:'http://www.nissan.com.mx/np300/'
		},{
			id:'9',
			nombre:'X Trail',
			desc:'2017 Armor CVT',
			marca:'Nissan',
			img:'https://booking.dacoda.com/Images/7/4x4icelandcarrental_1.png',
			precio:366200,
			mas_info:'http://www.nissan.com.mx/x-trail/'
		},{
			id:'10',
			nombre:'Jetta',
			desc:'2017 TM',
			marca:'Volkswagen',
			img:'http://shebuyscars.com/wp-content/uploads/2014/10/Jetta-15-TDI-S.png',
			precio:229900,
			mas_info:'http://www.vw.com.mx/es/models/jetta.html'
		}
	];
	res.send(autos);
});

app.get('/topten/1',function(req,res){
	var auto = {
			id:'10',
			nombre:'Jetta',
			desc:'2017 TM',
			marca:'Volkswagen',
			img:'http://shebuyscars.com/wp-content/uploads/2014/10/Jetta-15-TDI-S.png',
			precio:229900,
			mas_info:'http://www.vw.com.mx/es/models/jetta.html'
		}
		res.send(auto);

});

app.get('/bliss3',function(request, response){
	response.redirect(301,'/perra');
});









app.listen(80, function(){
	console.log('Escuchando en el puerto 80');
});
