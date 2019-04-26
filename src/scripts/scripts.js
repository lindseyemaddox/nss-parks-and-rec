
console.log("hello, parks");

fetch("http://localhost:8088/parks")
  .then(response => response.json())
  .then(data => {
    data.forEach(park => {
      const parkAsHTML = parkFactory(park);
      const name = park.name;
      const state = park.state;
      const visited = park.visited;
      addParkToDom(name, state, visited);
    });
  });


const output = document.getElementById("output");

let addParkToDom = (name, state, visited) => {
  output.innerHTML += parkFactory(name, state, visited);
};

let parkFactory = (name, state, visited) => {
  let borderClass = "border";
  if (visited) {
    borderClass += " visited";
  }
  return `
    <article class="${borderClass}">
      <h3>${name}</h3>
      <p>${state}</p>
    </article>
  `;
};
