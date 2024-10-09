export function stopSubmitEvent(HTMLElement) {
  HTMLElement.addEventListener("submit", (e) => { e.preventDefault() });
}

export function onclickOf(HTMLElement, callbackfn) {
  HTMLElement.addEventListener("click", callbackfn);
}

export const getWeatherCardsDiv = () => document.getElementById("weather-cards");

export const getModeButtons = () => Array.from(document.querySelectorAll("button.mode"));

const create = (elementType) => document.createElement(elementType);

export function createDiv(className) {
  const div = create("div");
  if (className) {
    div.className = className;
  }
  return div;
}
