// Unsplash API
const count = 10;
const apiKey = "YmSdlD5coaQD_omfsatbJjzSsP0aKBMEi-OvRJrdAH4";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Get photos from API
async function getPhotosFromAPI() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error here
  }
}

// On load get photos
getPhotos();