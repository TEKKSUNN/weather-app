import "./stylesheets/styles.css";

import { loadDropDown } from "@tekksunn/drop-down";

document.addEventListener("DOMContentLoaded", () => {
  loadDropDown("div.dropdown-content", "hover");
});