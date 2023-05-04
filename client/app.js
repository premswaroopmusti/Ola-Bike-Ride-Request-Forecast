  function onClickedEstimateCount() {
    console.log("Estimate count button clicked");
    var season = document.getElementById("season");
    var weather = document.getElementById("weather");
    var Temperature = document.getElementById("temperature");
    var Humidity = document.getElementById("humidity");
    var Windspeed = document.getElementById("windspeed");
    var Casual = document.getElementById("casual");
    var Day = document.getElementById("day");
    var Month = document.getElementById("month");
    var Year = document.getElementById("year");
    var Weekday = document.getElementById("weekday");
    var am_or_pm = document.getElementById("am_or_pm");
    var Holidays = document.getElementById("holidays");

    var estCount = document.getElementById("uiEstimatedCount");
  
    var url = "http://127.0.0.1:5000/predict_count"; //Use this if you are NOT using nginx which is first 7 tutorials
  
    $.post(url, {
        season: parseFloat(season.value),
        weather: parseFloat(weather.value),
        temperature: parseFloat(Temperature.value),
        humidity: parseFloat(Humidity.value),
        windspeed: parseFloat(Windspeed.value),
        casual: parseFloat(Casual.value),
        day: parseFloat(Day.value),
        month: parseFloat(Month.value),
        year: parseFloat(Year.value),
        weekday: parseFloat(Weekday.value),
        am_or_pm: parseFloat(am_or_pm.value),
        holidays: parseFloat(Holidays.value),


    },function(data, status) {
        console.log(data.estimated_count);
        estCount.innerHTML = "<h2>" + data.estimated_count.toString() + "</h2>";
        console.log(status);
    });
  }

  function onPageLoad() {
    console.log( "document loaded" );
    url = "http://127.0.0.1:5000/get_count"; // Use this if you are NOT using nginx which is first 7 tutorials
    $.get(url,function(data, status) {
        console.log("got response");
        
    });
  }
  
  window.onload = onPageLoad;
  
