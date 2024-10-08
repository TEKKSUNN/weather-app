import updateLocationStatus from "./modules/dom/location-status";
import { assignCurrentLocation } from "./modules/location";
import "./stylesheets/styles.css";

import { loadDropDown } from "@tekksunn/drop-down";

function main() {
  loadDropDown("div.dropdown-content", "hover");
  assignCurrentLocation();
  updateLocationStatus();
}

document.addEventListener("DOMContentLoaded", main);