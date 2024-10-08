import { getCurrentLocation } from "../location.js";

export default async function updateLocationStatus() {
  const currentLocation = await getCurrentLocation();
  if (currentLocation) {
    const locationStatus = document.querySelector(".current-location");
    if (currentLocation.length === 1) {
      locationStatus.textContent = currentLocation[0];
    } else if (currentLocation.length === 2) {
      locationStatus.textContent = `${currentLocation[0]}°, ${currentLocation[1]}°`;
    }
  } else {
    throw SyntaxError("Current location doesn't exist in localStorage.");
  }
}