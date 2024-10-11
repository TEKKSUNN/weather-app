import { createImage } from "./helpers";
import RainImage from "../../images/rain.png";
import CloudyImage from "../../images/cloudy.png";
import SnowyImage from "../../images/snowy.png";
import SunnyImage from "../../images/sunny.png";

export default function createImgFromIcon(iconName) {
  const createWeatherIcon = (url) => createImage(url, "weather-icon", `${iconName} weather icon`);
  if (iconName === "rain") {
    return createWeatherIcon(RainImage);
  }
  if (iconName === "cloudy" || iconName === "partially cloudy") {
    return createWeatherIcon(CloudyImage);
  }
  if (iconName === "snowy") {
    return createWeatherIcon(SnowyImage);
  }
  return createWeatherIcon(SunnyImage);
}
