import { format } from "date-fns";
import { appendTo, clearHTML, convertFareToCelc, createDiv, createText, getWeatherCardsDiv, getWeatherData } from "./helpers";
import createImgFromIcon from "./weather-icons";
import updateWeatherData from "../weather";

async function createWeatherCard(day) {
  const container = createDiv("weather-container");
  const dayName = createText("h2", format(day.datetime, "iiii").toUpperCase());
  const card = createDiv("weather-card");
  const icon = createImgFromIcon(day.icon);
  const name = createText("p", day.conditions, "weather-name");
  const desc = createText("p", day.description, "weather-desc");
  const temp = createText("p", `${(convertFareToCelc(day.temp).toFixed(2))}°C`, "weather-temp");
  const date = createText("p", format(day.datetime, "MM/dd/yyyy"), "weather-date");
  appendTo(card, icon, name, desc, temp, date);
  appendTo(container, dayName, card);
  return container;
}

async function getWeatherCards(amount) {
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

export async function loadAllCards() {
  const weatherCards = await getWeatherCards();
  const weatherCardsContainer = await getWeatherCardsDiv();
  clearHTML(weatherCardsContainer);
  appendTo(weatherCardsContainer, ...weatherCards);
}
