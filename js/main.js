
//checking if the browser supports
if(!"geolocation" in navigator) {
	
	loadWeather("san francisco, CA", "")

} else {
	loadWeather("san francisco, CA", "")
	navigator.geolocation.getCurrentPosition(function(position) {
		loadWeather(position.coords.latitude + ',' + position.coords.longitude)

	})
}

// refreshing the weather regulary
$(document).ready(function() {
	setInterval(getWeather, 10000)

})

//load weather function
function loadWeather(location, woeid) {
	$.simpleWeather({
		location: location,
		woeid: woeid,
		unit: 'f',
		success: function(weather) {
			city = weather.city
			temp = weather.temp + '&deg;'
			wcode = '<img class=weathericon src="img/weathericons/' + weather.code + '.png">'
			text = weather.text
			high = weather.forecast[0].high
			low = weather.forecast[0].low

			// sending the results to the outut
			$('.location').text(city)
			$('.temp').html(temp)
			$('.image').html(wcode)
			$('.status').html(text)
			$('.high').html(high)
			$('.low').html(low)

			//----------------------------------------------------------------------------------------
			//forecast
			var forecast =  weather.forecast
			forecast.shift()