import { getCreateLetterForm } from "./Form.js";

const letterCreateButton = document.getElementById("create-letter-button");


letterCreateButton.addEventListener("click", () => {
    const form = getCreateLetterForm();
    if (form) {
        form.style.visibility = "visible";
    }
});
