function getPlaces() {
    return fetch("http://localhost:8088/places")
    .then(placesData => placesData.json())
}

function getInterests() {
    return fetch("http://localhost:8088/interests")
    .then(interestsData => interestsData.json())
}

function saveForm(info) {
    return fetch("http://localhost:8088/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    });
  }

export { getPlaces, getInterests, saveForm }