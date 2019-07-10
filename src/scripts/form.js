// **Given** a user wants to keep track of a new point of interest
// **When** the user opens the application
// **Then** a form should be presented to the user in which the following properties of the point of interest can be provided

// 1. Name of the point of interest
// 1. Description of the point of interest
// 1. Cost of visiting the point of interest
// 1. Dropdown to pick which place the point of interest is located in

import { interestForm } from "./domComponent";
import { saveForm } from "./api";

function renderForm() {
    document.querySelector("#container").innerHTML += interestForm()
    handleFormSubmit()
}

function handleFormSubmit () {
    let interestName = document.querySelector("#interestName");
    let description = document.querySelector("#description");
    let cost = document.querySelector("#cost")
    let review = document.querySelector("#review")
    let placeID = document.querySelector("#place")
    let formBtn = document.querySelector("#formSubmitBtn")
    formBtn.addEventListener("click", () => {
        console.log("clicked")
            if (
            interestName.value === "" ||
            description.value === "" ||
            cost.value === "" ||
            review.value === "" ||
            placeID.value === ""
            ) {
            alert("Interest Name, Description, Cost, Review Required")
        } else {
            let capturedFormData = {
                name: interestName.value,
                description: description.value,
                cost: cost.value,
                review: review.value,
                placeId: parseInt(placeID.value)
            };
            saveForm(capturedFormData);
            interestName.value = "";
            description.value = "";
            cost.value = "";
            review.value = ""
          }
        });
      }

export { renderForm }

// getPlaces().then(stuff => {
//     if (stuff) {
//         stuff.id === parseInt(placeID.value)
//         selectedPlaceID = placeID.value
//     }
// })