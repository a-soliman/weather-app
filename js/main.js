
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