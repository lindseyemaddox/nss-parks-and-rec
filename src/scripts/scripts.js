
console.log("hello, parks");

fetch("http://localhost:8088/parks")
  .then(parks => parks.json())
  .then(parsedparks => {
    console.table(parsedparks);
  });