import { getModeButtons, onclickOf } from "./helpers";
import { showLoadingIcon } from "./loading";
import { activateMaximumTab, activateNormalTab } from "./tabs";
import { loadAllCards, loadNormalCards } from "./weather-cards";

export default function assignModeButtonEvents() {
  const modeButtons = getModeButtons();
  onclickOf(modeButtons[0], loadNormalDepth);
  onclickOf(modeButtons[1], loadMaximumDepth);
}

export async function loadNormalDepth() {
  showLoadingIcon();
  activateNormalTab();
  loadNormalCards();
}

export async function loadMaximumDepth() {
  showLoadingIcon();
  activateMaximumTab();
  loadAllCards();
}