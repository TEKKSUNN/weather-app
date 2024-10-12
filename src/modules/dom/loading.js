export const getLoadingIcon = () => document.querySelector(".loading-icon");

export default async function loadLoadingIcon() {
  const loadingIcon = getLoadingIcon();
  let imageURL = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=5NVlbMvf2Y49YmLDW8ort4fEYlDhzCW2&s=loading");
  imageURL = await imageURL.json();
  imageURL = imageURL.data.images.original.url;
  loadingIcon.src = imageURL;
}

export function hideLoadingIcon() {
  const loadingIcon = getLoadingIcon();
  loadingIcon.style.display = "none";
}

export function showLoadingIcon() {
  const loadingIcon = getLoadingIcon();
  loadingIcon.style.display = "block";
}
