const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('searchBtn');
const temprature = document.querySelector('.temprature');
const discription = document.querySelector('.discription');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-Speed');
const weatherImg = document.querySelector('.Weather-img');

const locationFound=document.querySelector('.location_not_found');
const weatherBody=document.querySelector('.weather-body');

async function weatherCheck(city) {

    const api_key = "b6cc7071c0d139bca505285e5169adfa";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
        response.json()
    );

    if(weather_data.cod==="400"){
       locationFound.style.display="flex";
       weatherBody.style.display="none";
   
    }else{
        locationFound.style.display="none";
        weatherBody.style.display="flex";
    
        temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        discription.innerHTML = `${weather_data.weather
        [0].description
            }`
        humidity.innerHTML = `${weather_data.main.humidity
            }%`;
    
        windSpeed.innerHTML = `${weather_data.wind.speed
            }Km/H`
    
        switch (weather_data.weather[0].main) {
            case "Clouds":
                weatherImg.src = "/pic/download (4).jfif";
    
                break;
    
    
                break;
            case "Clear":
                weatherImg.src = "/pic/images.jfif";
                break;
            case "Rain":
                weatherImg.src = "/pic/download.png";
                break;
            case "Snow":
                weatherImg.src = "/pic/images (1).jfif";
                break;
    
    
    
        }
    }
    
   

}






searchBtn.addEventListener('click', () => {
    weatherCheck(inputBox.value);
})