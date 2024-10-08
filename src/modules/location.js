import updateEverything from "./update";

export function processUserLocation(callbackfn) {
  if ("geolocation" in navigator) {
    return navigator.geolocation.getCurrentPosition(callbackfn);
  } else {
    console.log("Can't get user location.");
  }
}

export async function changeLocation(...location) {
  if (!location) {
    return;
  }
  if (location.length === 1 && location[1] !== "" || location.length === 2) {
    await setCurrentLocation(Array.from(location));
  } else {
    throw SyntaxError("Too much arguments, need only 1 for string, 2 for latitude and longtitude values.");
  }
}

export async function assignCurrentLocation() {
  processUserLocation(async function (position) {
    let currentLocation = await getCurrentLocation();
    if (!currentLocation) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      currentLocation = [latitude, longitude];
      await setCurrentLocation(currentLocation);
    }
  });
}

async function setCurrentLocation(location) {
  if (typeof location === "object") {
    await localStorage.setItem("currentLocation", await JSON.stringify(location));
    updateEverything();
  }
}

export async function getCurrentLocation() {
  const currentLocation = localStorage.getItem("currentLocation");
  if (currentLocation) {
    return JSON.parse(currentLocation);
  }
  return currentLocation;
};
