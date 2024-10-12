import { format } from "date-fns";
import { appendTo, clearHTML, convertFareToCelc, createDiv, createText, getWeatherCardsDiv, getWeatherData, onclickOf } from "./helpers";
import createImgFromIcon from "./weather-icons";
import updateWeatherData from "../weather";
import { getTabFocused } from "./tabs";
import getWeatherCardDialog, { getWeatherCardDialogsContainer } from "./weather-cards-dialogs";

async function createWeatherCard(day) {
  const container = createDiv("weather-container");
  const dayName = createText("h2", format(day.datetime, "iiii").toUpperCase(), "day-name");
  const card = createDiv("weather-card");
  const icon = createImgFromIcon(day.icon);
  const name = createText("p", day.conditions, "weather-name");
  const desc = createText("p", day.description, "weather-desc");
  const temp = createText("p", `${(convertFareToCelc(day.temp).toFixed(2))}°C`, "weather-temp");
  const date = createText("p", format(day.datetime, "MM/dd/yyyy"), "weather-date");
  const dialogContainer = getWeatherCardDialogsContainer();
  const dialog = getWeatherCardDialog(day.hours, day.datetime);
  onclickOf(card, () => { dialog.showModal() });
  appendTo(dialogContainer, dialog);
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

export async function updateWeatherCards() {
  const currentTab = await getTabFocused();
  if (currentTab === "normal") {
    loadNormalCards();
  } else if (currentTab === "maximum") {
    loadAllCards();
  }
}
