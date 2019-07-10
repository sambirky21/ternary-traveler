function placesHTML(place){
    return `
    <div>
        <section class="placeBox" id="placeCard--${place.id}">
            <h2>${place.name}</h2>
            <section id="interests"></section>
        </section>
        <section id=interests></section>
        <section id=interestsForm></section>
    </div>`
}

function interestsHTML(interest){
    return `
    <div>
        <section class="interest">
            <h3 class="interestName">Interest Name</h3>
            <h4>${interest.name}</h4>
            <ul>
                <li><label class="interestLabel">Description</label></br>${interest.description}</li>
                <button id="delete--${interest.id}" class="deleteBtn">delete</button>
                <button id="edit--${interest.id}" class="editBtn">edit</button>
                <li><label class="interestLabel">Cost</label></br>${interest.cost}</li>
                <button id="delete--${interest.id}" class="deleteBtn">delete</button>
                <button id="edit--${interest.id}" class="editBtn">edit</button>
                <li><label class="interestLabel">Review</label></br>${interest.review}</li>
                <button id="delete--${interest.id}" class="deleteBtn">delete</button>
                <button id="edit--${interest.id}" class="editBtn">edit</button>
            </ul>
        </section>
    <div>`
}

function interestForm() {
    return `
    <div>
        <section class="form">

            <label>Interest Name</label>
            <input type="text" id="interestName">

            <label>Description</label>
            <input type="text" id="description">

            <label>Cost</label>
            <input type="text" id="cost">

            <label>Review</label>
            <input type="text" id="review">

            <label for="place">Place</label>
            <select name="place" id="place">
                <option value="1">Italy</option>
                <option value="2">France</option>
                <option value="3">Switzerland</option>
            </select>
            <button id="formSubmitBtn">submit</button>


        </section>
    </div>`
}

export{ placesHTML, interestsHTML, interestForm }