import { getModeButtons, onclickOf } from "./helpers";
import { activateMaximumTab, activateNormalTab } from "./tabs";
import { loadAllCards, loadNormalCards } from "./weather-cards";

export default function assignModeButtonEvents() {
  const modeButtons = getModeButtons();
  onclickOf(modeButtons[0], loadNormalDepth);
  onclickOf(modeButtons[1], loadMaximumDepth);
}

export async function loadNormalDepth() {
  activateNormalTab();
  loadNormalCards();
}

export async function loadMaximumDepth() {
  activateMaximumTab();
  loadAllCards();
}