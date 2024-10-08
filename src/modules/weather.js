import { getCurrentLocation } from "./location";

const API_KEY = "SHA9MMADYN57NSF8AMEQ6AMQN";

export default async function updateWeatherData() {
  const currentLocation = await getCurrentLocation();
  if (currentLocation) {
    if (currentLocation.length === 1) {
      const newWeatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentLocation[0]}?unitGroup=us&key=${API_KEY}&contentType=json`);
      await setWeatherData(await newWeatherData.json());
    } else if (currentLocation.length === 2) {
      const newWeatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currentLocation[0] + ', ' + currentLocation[1]}?unitGroup=us&key=${API_KEY}&contentType=json`);
      await setWeatherData(await newWeatherData.json());
    }
  } else {
    throw SyntaxError("Current location doesn't exist in localStorage.");
  }
}

async function setWeatherData(weatherData) {
  localStorage.setItem("weatherData", JSON.stringify(weatherData));
}

export function assignWeatherData() {
  if (!localStorage.getItem("weatherData")) {
    updateWeatherData();
  }
}
