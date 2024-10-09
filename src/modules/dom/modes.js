import { getModeButtons, onclickOf } from "../helpers";
import { activateMaximumTab, activateNormalTab } from "./tabs";

export default function assignModeButtonEvents() {
  const modeButtons = getModeButtons();
  onclickOf(modeButtons[0], loadNormalDepth);
  onclickOf(modeButtons[1], loadMaximumDepth);
}

export async function loadNormalDepth() {
  activateNormalTab();
}

export async function loadMaximumDepth() {
  activateMaximumTab();
}