const cityName = document.getElementById("cityName");

const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");

const temp = document.getElementById("temp");

const temp_status = document.getElementById("temp_status");

const datahide=document.querySelector(".middle_layer")

const day=document.getElementById("day")
const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = "please write city name before searching";
  datahide.classList.add("data_hide")
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&APPID=d8a7cbe2e9cac77a6e89ad888625afc5`;

      const response = await fetch(url);

      const data = await response.json(); // json data converted to object
      const arrData = [data];
      // console.log(data);
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
      temp.innerText = arrData[0].main.temp;
     
      const tempMood=arrData[0].weather[0].main;
 //condition to check sunny or cloudy
 if (tempMood == "clear") {
    temp_status.innerHTML =
      "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
  } else if (tempMood == "Clouds") {
    temp_status.innerHTML =
      "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
  } else if (tempMood == "Rain") {
    temp_status.innerHTML =
      "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
  } else {
    temp_status.innerHTML =
      "<i class='fas  fa-sun' style='color:#f1f2f6;'></i>";
  }

  datahide.classList.remove("data_hide")

        

    } catch {
      city_name.innerText = "Please enter the city name properly";
      datahide.classList.add("data_hide")
    }
  }
};
submitBtn.addEventListener("click", getInfo);
submitBtn.addEventListener("keypressed", getInfo);

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];
    day.innerText=days;
  };
  getCurrentDay();

  const getCurrentTime = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth() + 1];
    var date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();

    let periods = "AM";

    if (hours > 11) {
      periods = "PM";
      if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }

    return `${month} ${date} | ${hours}:${mins}${periods}`;
  };

  today_data.innerHTML = getCurrentTime();