import updateLocationStatus from "./dom/location-status";
import { updateWeatherCards } from "./dom/weather-cards";
import updateWeatherData from "./weather";

export default async function updateEverything() {
  updateLocationStatus();
  await updateWeatherData();
  updateWeatherCards();
}
