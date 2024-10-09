export function stopSubmitEvent(HTMLElement) {
  HTMLElement.addEventListener("submit", (e) => { e.preventDefault() });
}

export const getWeatherCardsDiv = () => document.getElementById("weather-cards");