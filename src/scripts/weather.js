
// function fetches weather data
const weather = (key, latitude, longitude) => {
  // parameters in the url use string interpolation
  return fetch(
    `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`
  )
    // data from the fetch call is passed through the json function
    .then(response => response.json())
}
