import { appendTo, convertFareToCelc, createButton, createDialog, createDiv, createText, onclickOf } from "./helpers"
import createImgFromIcon from "./weather-icons";

export default function getWeatherCardDialog(hoursData) {
  const weatherCardDialog = createDialog("weather-card-dialog");
  const container = createDiv("weather-hours-container");
  const closeButton = createButton("close-dialog", "X");
  onclickOf(closeButton, () => {
    weatherCardDialog.close();
  });
  appendTo(container, closeButton);
  hoursData.forEach((hour) => {
    const dataContainer = createDiv("hour-data");
    const time = createText("p", hour.datetime, "hour-datetime");
    const temp = createText("p", `${convertFareToCelc(hour.temp)}°C`, "hour-temp");
    const icon = createImgFromIcon(hour.icon);
    appendTo(dataContainer, time, temp, icon);
    appendTo(container, dataContainer);
  });
  appendTo(weatherCardDialog, container);
  return weatherCardDialog;
}
