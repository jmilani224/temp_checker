

const goButton = document.getElementById('go'),
      backButton = document.getElementById('back'),
      tempContainer = document.getElementsByClassName('temp')[0],
      inputContainer = document.getElementsByClassName('local-zip')[0],
      p = document.getElementById("error");


const getWeather = () => {
    const zipInput = document.getElementById("zip").value,
          openWeatherApi = "https://api.openweathermap.org/data/2.5/weather?",
          openWeatherKey = "&appid=0d810119607f27d33df9a73e454cf37e",
          loc = `zip=${zipInput},us`,
          format = "&units=imperial",
          apiUrl = openWeatherApi + loc + format + openWeatherKey;

    if (parseInt(zipInput) && zipInput.toString().length === 5) {

        tempContainer.style.display = 'flex';
        inputContainer.style.display = 'none';
        
        fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(weather => {
            let currentTemp = weather.main.temp;
            let h1 = document.getElementById('header');
            h1.innerHTML = `${currentTemp}°`;
        
        })
        .catch(err => { 
            return err;
        })
    } else {
        p.style.display = 'flex';
        p.style.color = 'red';
        p.style.display = 'block';
        p.innerHTML = 'Please enter a valid zip code';
    }


};

const goBack = () => {
    
    tempContainer.style.display = 'none';
    inputContainer.style.display = 'flex';
    p.style.display = 'none';

};

goButton.addEventListener("click", getWeather);
backButton.addEventListener("click", goBack);


