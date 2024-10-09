import { createImage } from "./helpers";

const rainURL = "./images/rain.png";
const cloudyURL = "./images/cloudy.png";
const snowyURL = "./images/snowy.png";
const sunnyURL = "./images/sunny.png";

export default function createImgFromIcon(iconName) {
  const createWeatherIcon = (url) => createImage(url, "weather-icon", `${iconName} weather icon`);
  if (iconName === "rain") {
    return createWeatherIcon(rainURL);
  }
  if (iconName === "cloudy" || iconName === "partially cloudy") {
    return createWeatherIcon(cloudyURL);
  }
  if (iconName === "snowy") {
    return createWeatherIcon(snowyURL);
  }
  return createWeatherIcon(sunnyURL, iconName);
}
