$(document).ready(() => {
  const apiKey = "5d3e4b07565121dc7d9e0b6b6b061841";

  $("#getWeatherButton").click(() => {
    const location = $("#locationName").val();

    if (location.trim() !== "") {
      getWeatherData(location);
    } else {
      showError("Please enter a valid location.");
    }
  });

  const getWeatherData = async (location) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to retrieve weather data.");
        }
        return response.json();
      })
      .then((data) => {
        const { main, weather } = data;
        const { temp, humidity } = main;
        const { description } = weather[0];
        displayWeatherInfo(location, temp, description, humidity);
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  const displayWeatherInfo = (location, temperature, description, humidity) => {
    $("#weatherInfo").html(`
      <h2>Weather in ${location}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
      <p>Humidity: ${humidity}%</p>
    `);
  };

  const showError = (message) => {
    $("#weatherInfo").html(`
      <div class="alert alert-danger" role="alert">
        ${message}
      </div>
    `);
  };
});
