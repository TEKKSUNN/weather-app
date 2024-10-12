import loadLoadingIcon from "./modules/dom/loading";
import updateLocationStatus from "./modules/dom/location-status";
import assignModeButtonEvents from "./modules/dom/modes";
import { assignTabFocused } from "./modules/dom/tabs";
import { assignCurrentLocation } from "./modules/location";
import activateSearchButton from "./modules/search";
import updateEverything from "./modules/update";
import { assignWeatherData } from "./modules/weather";
import "./stylesheets/styles.css";

import { loadDropDown } from "@tekksunn/drop-down";

async function main() {
  loadLoadingIcon();
  loadDropDown("div.dropdown-content", "hover");
  await assignCurrentLocation();
  updateLocationStatus();
  await assignWeatherData();
  activateSearchButton();
  assignTabFocused();
  assignModeButtonEvents();
  updateEverything();
}

document.addEventListener("DOMContentLoaded", main);