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

export function activateNormalTab() {
  activateTab(0);
}

export function activateMaximumTab() {
  activateTab(1);
}