import updateLocationStatus from "./modules/dom/location-status";
import { assignCurrentLocation } from "./modules/location";
import activateSearchButton from "./modules/search";
import { assignWeatherData } from "./modules/weather";
import "./stylesheets/styles.css";

import { loadDropDown } from "@tekksunn/drop-down";

async function main() {
  loadDropDown("div.dropdown-content", "hover");
  await assignCurrentLocation();
  updateLocationStatus();
  assignWeatherData();
  activateSearchButton();
}

document.addEventListener("DOMContentLoaded", main);