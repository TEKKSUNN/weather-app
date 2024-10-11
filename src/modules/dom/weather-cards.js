import { format } from "date-fns";
import { appendTo, clearHTML, convertFareToCelc, createDiv, createText, getWeatherCardsDiv, getWeatherData } from "./helpers";
import createImgFromIcon from "./weather-icons";
import updateWeatherData from "../weather";

export async function createWeatherCard(day) {
  const container = createDiv("weather-container");
  const dayName = createText("h2", format(day.datetime, "iiii"));
  const card = createDiv("weather-card");
  const icon = createImgFromIcon(day.icon);
  const name = createText("p", day.conditions, "weather-name");
  const desc = createText("p", day.description, "weather-desc");
  const temp = createText("p", convertFareToCelc(day.temp), "weather-temp");
  const date = createText("p", format(day.datetime, "MM/dd/yyyy"), "weather-date");
  appendTo(card, icon, name, desc, temp, date);
  appendTo(container, dayName, card);
  return container;
}

export async function getWeatherCards(amount) {
  await updateWeatherData();
  const weatherDataDays = await getWeatherData().days;
  const weatherCards = [];
  await weatherDataDays.forEach(async(day, index) => {
    if (index >= amount) return;
    const weatherCard = await createWeatherCard(day);
    weatherCards.push(weatherCard);
  });
  return weatherCards;
}

export async function loadNormalCards() {
  const weatherCards = await getWeatherCards(5);
  const weatherCardsContainer = await getWeatherCardsDiv();
  clearHTML(weatherCardsContainer);
  appendTo(weatherCardsContainer, ...weatherCards);
}
