
const parkContainerEl = document.getElementById("container");

const parkDomBuilder = (name, state, visited, current, today, week) => {
let borderClass = "unvisited"
if(visited) {
    borderClass = " visited"
}
parkContainerEl.innerHTML += `
<article class="${borderClass}">
  <h3>${name}</h3>
  <p>${state}</p>
  <p>Weather:</p>
      <ul>
        <li>Currently: ${current}</li>
        <li>Today: ${today}</li>
        <li>Week: ${week}</li>
      </ul>
</article>
`;
}