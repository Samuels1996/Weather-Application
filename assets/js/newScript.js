var apiKey ='7adddd61a6c99ba40eb99e6a48cd59a1'
var searchBtnEl = $("#searchBtn")

function currentWeather (cords) {
    var url1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apikey;
    var city = $('.city-name').val();
    
    fetch(url1)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
            .then(function(data) {
                console.log(data);
                
                var cityName = data.name;
                var humidity = data.main.humidity;
                var windSpeed = data.wind.speed;
                


            })



    };
