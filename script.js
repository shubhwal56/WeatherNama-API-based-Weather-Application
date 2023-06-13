// async function getWeather(){
//     const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/octet-stream',
// 		'X-RapidAPI-Key': '35acd12ab6msh9dcd92a7670a160p17f7b8jsn3cbfb799e71a',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// getWeather();


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '35acd12ab6msh9dcd92a7670a160p17f7b8jsn3cbfb799e71a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city)=>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)

		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = formatTime(response.sunrise)
		sunset.innerHTML = formatTime(response.sunset)

	})
	.catch(err => console.log(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

const getWeather1 = (city) => {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai", options)
  .then((response) => response.json())
  .then((data) => {
    const feelsLike = document.getElementById("feels_like3");
    const humidity = document.getElementById("humidity3");
    const minTemp = document.getElementById("min_temp3");
    const maxTemp = document.getElementById("max_temp3");
	const sunrise = document.getElementById("sunrise3");
	const sunset = document.getElementById("sunset3");
	const temp = document.getElementById("temp3");
	const windDegrees = document.getElementById("wind_degrees3");
    const windSpeed = document.getElementById("wind_speed3");

    feelsLike.textContent = data.feels_like;
    humidity.textContent = data.humidity;
    minTemp.textContent = data.min_temp;
    maxTemp.textContent = data.max_temp;
	sunrise.textContent = formatTime(data.sunrise);
    sunset.textContent = formatTime(data.sunset);
    temp.textContent = data.temp;
	windDegrees.textContent = data.wind_degrees;
    windSpeed.textContent = data.wind_speed;
    
  })
  .catch((err) => console.log(err));
}

  function formatTime(timeStr) {
	const time = new Date(timeStr);
	const hours = time.getHours().toString().padStart(2, "0");
	const minutes = time.getMinutes().toString().padStart(2, "0");
	const seconds = time.getSeconds().toString().padStart(2, "0");
	return `${hours}:${minutes}:${seconds}`;
}
  
  submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather1(city.value);
  });

  getWeather1()
  
const getWeather2 = (city) => {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai", options)
  .then((response) => response.json())
  .then((data) => {
    const feelsLike = document.getElementById("feels_like4");
    const humidity = document.getElementById("humidity4");
    const minTemp = document.getElementById("min_temp4");
    const maxTemp = document.getElementById("max_temp4");
	const sunrise = document.getElementById("sunrise4");
	const sunset = document.getElementById("sunset4");
	const temp = document.getElementById("temp4");
	const windDegrees = document.getElementById("wind_degrees4");
    const windSpeed = document.getElementById("wind_speed4");

    feelsLike.textContent = data.feels_like;
    humidity.textContent = data.humidity;
    minTemp.textContent = data.min_temp;
    maxTemp.textContent = data.max_temp;
	sunrise.textContent = formatTime(data.sunrise);
    sunset.textContent = formatTime(data.sunset);
    temp.textContent = data.temp;
	windDegrees.textContent = data.wind_degrees;
    windSpeed.textContent = data.wind_speed;
    
  })
  .catch((err) => console.log(err));
}

  function formatTime(timeStr) {
	const time = new Date(timeStr);
	const hours = time.getHours().toString().padStart(2, "0");
	const minutes = time.getMinutes().toString().padStart(2, "0");
	const seconds = time.getSeconds().toString().padStart(2, "0");
	return `${hours}:${minutes}:${seconds}`;
}
  
  submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather2(city.value);
  });

  getWeather2()
  
const getWeather3 = (city) => {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata", options)
  .then((response) => response.json())
  .then((data) => {
    const feelsLike = document.getElementById("feels_like5");
    const humidity = document.getElementById("humidity5");
    const minTemp = document.getElementById("min_temp5");
    const maxTemp = document.getElementById("max_temp5");
	const sunrise = document.getElementById("sunrise5");
	const sunset = document.getElementById("sunset5");
	const temp = document.getElementById("temp5");
	const windDegrees = document.getElementById("wind_degrees5");
    const windSpeed = document.getElementById("wind_speed5");

    feelsLike.textContent = data.feels_like;
    humidity.textContent = data.humidity;
    minTemp.textContent = data.min_temp;
    maxTemp.textContent = data.max_temp;
	sunrise.textContent = formatTime(data.sunrise);
    sunset.textContent = formatTime(data.sunset);
    temp.textContent = data.temp;
	windDegrees.textContent = data.wind_degrees;
    windSpeed.textContent = data.wind_speed;
    
  })
  .catch((err) => console.log(err));
}

  function formatTime(timeStr) {
	const time = new Date(timeStr);
	const hours = time.getHours().toString().padStart(2, "0");
	const minutes = time.getMinutes().toString().padStart(2, "0");
	const seconds = time.getSeconds().toString().padStart(2, "0");
	return `${hours}:${minutes}:${seconds}`;
}
  
  submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather3(city.value);
  });

  getWeather3()

  function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}




  
