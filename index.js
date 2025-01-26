var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#submitBtn'); // Corrected: Changed to submitBtn
var city = document.querySelector('#cityouput'); // Corrected: Changed to cityouput
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik = "58b213a6c551323c0e6665a51dd6e780";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    // Corrected: Corrected the typo in the API URL
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather']['0']['description'];
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = 'Weather of <span>' + nameval + '</span>'; // Corrected: Added missing single quotes
            temp.innerHTML = 'Temperature: <span>' + convertion(temperature) + ' C</span>';
            description.innerHTML = 'Sky Conditions: <span>' + descrip + '</span>'; // Corrected: Changed to description
            wind.innerHTML = 'Wind Speed: <span>' + wndspeed + ' km/h</span>';
        })
        .catch(err => alert('You entered the wrong city name'));
});