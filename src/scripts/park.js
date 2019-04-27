
console.log("hello, parks");

// declare the function to fetch the parks data
const getParkData = () => {
  // url that fetches the parks data
  fetch(
    "https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json"
  )
    // then method with paramater response which is another function that passes the data from the api which is then passed to the json function
    .then(response => response.json())
    // park data is passed as a parameter, it's the object that's what we get back from the json method
    .then(parkData => {
      // parks is the array that is accessed within the created parkData object, forEach loop is iterating over each object in the parks array
      parkData.parks.forEach(park => {
        // declaring variables for storing data we'll print to the DOM
        let parkName = park.name;
        let parkState = park.state;
        let parkVisit = park.visited;
        // calls weather function declared in weather.js
        weather(key, park.latitude, park.longitude)
          // then function receives a function as its parameter that has a parameter of weatherData
          .then(weatherData => {
            let current = weatherData.currently.summary;
            let today = weatherData.hourly.summary;
            let week = weatherData.daily.summary;
            parkDomBuilder(parkName, parkState, parkVisit, current, today, week);
          });
      });
    });
};
getParkData();