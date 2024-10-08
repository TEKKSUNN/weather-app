import updateLocationStatus from "./dom/location-status";
import updateWeatherData from "./weather";

export default async function updateEverything() {
  updateLocationStatus();
  updateWeatherData();
}
