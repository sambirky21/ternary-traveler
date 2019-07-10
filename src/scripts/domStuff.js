import { placesHTML, interestsHTML } from "./domComponent.js";
import { getPlaces, getInterests } from "./api.js";
import { renderForm } from "./form.js";

function renderPlaces(array) {
    for (let i = 0; i < array.length; i++) {
      document.querySelector("#container").innerHTML += placesHTML(array[i]);
    }
  }

  function renderInterests(array) {
    for (let i = 0; i < array.length; i++) {
      document.querySelector("#interests").innerHTML += interestsHTML(array[i]);
    }
  }

function placesToDOM() {
    getPlaces().then(placesData => {
      renderPlaces(placesData)
    })
    getInterests().then(interestsData => {
      renderInterests(interestsData)
      renderForm(interestsData)
    })

  }

  export { placesToDOM }