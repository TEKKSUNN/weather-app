import { loadMaximumDepth, loadNormalDepth } from "./modes";

const modeButtons = Array.from(document.querySelectorAll("li.dropdown-item"));
const focusClass = "focused";

function activateTab(num) {
  deactivateTabs();
  modeButtons[num].classList.add(focusClass);
}

function deactivateTab(tab) {
  tab.classList.remove(focusClass);
}

function deactivateTabs() {
  modeButtons.forEach(deactivateTab);
}

function activateTabFocused(tabFocused) {
  if (tabFocused === "normal") {
    loadNormalDepth();
  } else {
    loadMaximumDepth();
  }
}

async function setTabFocused(tabName) {
  localStorage.setItem("tabFocused", tabName);
}

export function activateNormalTab() {
  activateTab(0);
  setTabFocused("normal");
}

export function activateMaximumTab() {
  activateTab(1);
  setTabFocused("maximum");
}

export function assignTabFocused() {
  const tabFocused = localStorage.getItem("tabFocused");
  if (tabFocused) {
    activateTabFocused(tabFocused);
  } else {
    setTabFocused("normal");
  }
}

export const getTabFocused = () => localStorage.getItem("tabFocused");
