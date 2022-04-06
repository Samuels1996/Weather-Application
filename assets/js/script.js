var apiKey = '00216aa0eac236cbf1da5d596e55aab8';
var lat = lat;
var long = long;

document.querySelector('button').addEventListener('click', showWeather);



function showWeather() {
    let city = document.querySelector('input').value;
    if (city) {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

        fetch(url)
        .then (res=>res.json())
        .then (({lat, lon})=>{
            let url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

            fetch(url2)
            .then (res=>res.json())
            .then (data =>{
                console.log(data)
            }(https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key})
        })
    }
}