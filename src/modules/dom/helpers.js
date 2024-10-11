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

export function createText(type, textContent, className) {
  if (!type) {
    return;
  }
  const text = create(type);
  if (textContent) {
    text.textContent = textContent;
  }
  if (className) {
    text.className = className;
  }
  return text;
}

export function createImage(url, className, altText) {
  const image = create("img");
  if (url) {
    image.src = url;
  }
  if (className) {
    image.className = className;
  }
  if (altText) {
    image.alt = altText;
  }
  return image;
}

export function convertFareToCelc(farenheit) {
  return ((parseFloat(farenheit) - 32) * 5)/9;
}

export function appendTo(parentElement, ...childElements) {
  if (childElements && parentElement) {
    childElements.forEach((element) => {
      parentElement.appendChild(element);
    });
  }
}

export const getWeatherData = () => JSON.parse(localStorage.getItem("weatherData"));
