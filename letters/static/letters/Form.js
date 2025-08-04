export const getCreateLetterForm = () => {
    return document.getElementById("create-letter-form-container");
}

const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.slice(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const letterForm = document.getElementById("create-letter-form");
const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const toDate = document.getElementById("date_user_can_open_letter");
const cancelButton = document.getElementById("cancel-button");

cancelButton.addEventListener("click", () => {
    const form = document.getElementById("create-letter-form-container");
    form.style.visibility = "hidden";
});

letterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const csrfToken = getCookie('csrftoken');

    const formData = new FormData();
    formData.append('name', nameInput.value);
    formData.append('description', descriptionInput.value);
    formData.append('date_user_can_open_letter', toDate.value);

    fetch("http://localhost:8000/api/letters", {
        method: "POST",
        headers: {
            "X-CSRFToken": csrfToken,
        },
        body: formData,
        credentials: "same-origin"
    }).then((response) => {
    if (response.ok){
        return response.json();
    }}).then((data) => {
        if (data.redirect_url) {
            window.location.href = data.redirect_url;
        } else {
            console.log(data.message);
        }
    })
})
