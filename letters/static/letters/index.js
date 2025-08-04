import { Letter } from "./Letter.js";

const createLettersRow = () => {
    const letterRow = document.createElement("div");
    letterRow.className = "letters-row";
    return letterRow;
}

const renderAllLetters = (response) => {
    let letter_count = 0;
    let letter_row = createLettersRow();
    for (let letter in response){
        if (letter_count % 5 == 0){
            letter_row = createLettersRow();
            lettersDisplay.appendChild(letter_row);
        }
        letter_row.appendChild(Letter(response[letter]));
        letter_count++;
    }
}

const lettersDisplay = document.querySelector(".all-letters");

fetch("http://localhost:8000/api/letters")
.then(
    (data) => data.json()
)
.then((responseData) => {
    renderAllLetters(responseData);
})