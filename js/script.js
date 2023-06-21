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
});
