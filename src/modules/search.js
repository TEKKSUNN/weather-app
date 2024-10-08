import { stopSubmitEvent } from "./helpers";
import { changeLocation } from "./location";

export default function activateSearchButton() {
  const searchForm = document.querySelector("form");
  stopSubmitEvent(searchForm);
  searchForm.addEventListener("submit", handleSearch);
}

function handleSearch() {
  const stringRegExp = new RegExp(/([A-Z]|[a-z])\w+/g);
  const numRegExp = new RegExp(/\d+(\.{0,1}\d+){0,1}/g);
  const query = document.getElementById("query").value;
  if (query === "") {
    return;
  }
  if (query.match(stringRegExp)) {
    changeLocation(query);
  } else {
    const locations = query.match(numRegExp);
    changeLocation(...locations);
  }
}
