var apiKey ='7adddd61a6c99ba40eb99e6a48cd59a1'
var searchBtnEl = $("#searchBtn")
var today = moment();
$('.date').text(today.format('L'))

function currentWeather () {
    // var url1 = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
    var city = $('#city-name').val();
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
            .then(function(data) {
                console.log(data);
                
                var cityName = data.name;
                var humidity = data.main.humidity;
                var windSpeed = data.wind.speed;
                var longitude = data.coord.lon;
                var latitude = data.coord.lat;
                var temperature = data.main.temp;
                var icon = data.weather[0].icon;
                var todayWeather = [cityName, humidity, windSpeed, longitude, latitude, temperature, icon]

                console.log(todayWeather)
                console.log(currentWeather)

                document.querySelector('.cityNames').innerHTML = cityName;
                document.querySelector('.humidity').innerHTML = humidity + '%';
                document.querySelector('.nowTemp').innerHTML = temperature +'°F';
                document.querySelector('.currentIcon').src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
                document.querySelector('.windSpeed').innerHTML = windSpeed +'mph';

              
            })

    };

//     $.ajax({
//         url:url1,
//         method:"GET",
//     })
// }
// currentWeather()

    var searchBtnEl = $('#searchBtn');
    searchBtnEl.on('click', currentWeather)