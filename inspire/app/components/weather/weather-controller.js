(function (){
	
	var wc = this;
	var converter = 9/5 - 459;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		weather = JSON.parse (weather)
		//What can you do with this weather object?
		 var weatherElem = $('#weather')
    	var template = ''
      template += `<h2>Current Weather - Boise, ID</h2><ul><li>Precipitation: ${weather.weather[0].description}</li><li>Current Temperature: ${weather.main.temp * 9/5 - 459}&deg;</li><li> Today's High: ${weather.main.temp_max * 9/5 - 459}&deg;</li><li> Today's Low: ${weather.main.temp_min * 9/5 - 459}&deg;</li><li>Wind: ${weather.wind.speed / 0.44704}</li>`
	  weatherElem.append(template);
	})
	
	
	
	
	
}())
