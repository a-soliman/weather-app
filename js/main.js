
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

			for(var i = 0; i < 6 ; i++) {
				var day = forecast[i].day
				var icon = 'img/weathericons/' + forecast[i].code + '.png'
				var forecastTemp = forecast[i].high + '/' + forecast[i].low
				var forecastText = forecast[i].text

				$('.day-name-' + [i]).html(day)
				$('.day-image-' + [i]).attr("src", icon)
				$('.day-text-' + [i]).html(forecastText)
				$('.day-temp-' + [i]).html(forecastTemp)

			}

		},
		//setting up an error message
		error: function(error) {
			$('.error').html('<p>' + error + '</p>')
		}
	})
}