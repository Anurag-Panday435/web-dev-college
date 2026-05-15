// script.js

let city = document.getElementById("city");
let searchBtn = document.getElementById("searchBtn");
let locationBtn = document.getElementById("locationBtn");

let temp = document.getElementById("temp");
let cityName = document.getElementById("cityName");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let weatherIcon = document.getElementById("weatherIcon");
let condition = document.getElementById("condition");

let loader = document.getElementById("loader");

let themeBtn = document.getElementById("themeBtn");

/* =========================
   API KEY
========================= */

const apiKey = '9f6290d6cda9a36a63755fadee71f83d';

/* =========================
   SEARCH BUTTON
========================= */

searchBtn.addEventListener("click",()=>{

    if(city.value==""){
        alert("Please enter city name");
        return;
    }

    getWeather(city.value);

});

/* =========================
   ENTER KEY SEARCH
========================= */

city.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){
        getWeather(city.value);
    }

});

/* =========================
   GET WEATHER
========================= */

async function getWeather(cityValue){

    try{

        loader.style.display = "block";

        let url =
`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;

        let response = await fetch(url);

        let data = await response.json();

        loader.style.display = "none";

        if(data.cod=="404"){
            alert("City not found");
            return;
        }

        updateUI(data);

    }

    catch(error){

        loader.style.display = "none";

        alert("Something went wrong");

        console.log(error);

    }

}

/* =========================
   UPDATE UI
========================= */

function updateUI(data){

    temp.innerHTML =
Math.round(data.main.temp) + "°C";

    cityName.innerHTML = data.name;

    humidity.innerHTML =
data.main.humidity + "%";

    wind.innerHTML =
data.wind.speed + " km/h";

    condition.innerHTML =
data.weather[0].main;

    let weather = data.weather[0].main;

    changeBackground(weather);

    /* Weather Icons */

    if(weather=="Clouds"){

        weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/414/414825.png";

    }

    else if(weather=="Clear"){

        weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/869/869869.png";

    }

    else if(weather=="Rain"){

        weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/3351/3351979.png";

    }

    else if(weather=="Snow"){

        weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/642/642102.png";

    }

    else if(weather=="Mist"){

        weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/4005/4005901.png";

    }

    else{

        weatherIcon.src =
"https://cdn-icons-png.flaticon.com/512/1779/1779940.png";

    }

}

/* =========================
   LOCATION WEATHER
========================= */

locationBtn.addEventListener("click",()=>{

    navigator.geolocation.getCurrentPosition(
        async(position)=>{

            try{

                loader.style.display = "block";

                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                let url =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

                let response = await fetch(url);

                let data = await response.json();

                loader.style.display = "none";

                updateUI(data);

            }

            catch(error){

                loader.style.display = "none";

                alert("Location error");

            }

        }
    )

});

/* =========================
   DYNAMIC BACKGROUND
========================= */

function changeBackground(weather){

    if(weather=="Clear"){

        document.body.style.background =
"linear-gradient(135deg,#f7971e,#ffd200)";

    }

    else if(weather=="Clouds"){

        document.body.style.background =
"linear-gradient(135deg,#757f9a,#d7dde8)";

    }

    else if(weather=="Rain"){

        document.body.style.background =
"linear-gradient(135deg,#141e30,#243b55)";

    }

    else if(weather=="Snow"){

        document.body.style.background =
"linear-gradient(135deg,#83a4d4,#b6fbff)";

    }

    else{

        document.body.style.background =
"linear-gradient(135deg,#0f2027,#203a43,#2c5364)";

    }

}

/* =========================
   THEME TOGGLE
========================= */

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML = "☀";

    }

    else{

        themeBtn.innerHTML = "🌙";

    }

});