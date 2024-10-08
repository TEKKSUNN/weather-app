export function stopSubmitEvent(HTMLElement) {
  HTMLElement.addEventListener("submit", (e) => { e.preventDefault() });
}