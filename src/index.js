import "./stylesheets/styles.css";

import { loadDropDown } from "@tekksunn/drop-down";

function main() {
  loadDropDown("div.dropdown-content", "hover");
}

document.addEventListener("DOMContentLoaded", main);