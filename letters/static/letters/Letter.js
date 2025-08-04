export const Letter = (letterInfo) => {
    const letterContainer = document.createElement("div");
    letterContainer.className = "letter-container";

    const headerDiv = document.createElement("div");
    headerDiv.className = "letter-header";

    const h1 = document.createElement("h1");
    h1.id = "letter-name";
    h1.textContent = letterInfo.name;

    headerDiv.appendChild(h1);


    const dateContainer = document.createElement("div");
    dateContainer.className = "date-container";

    const createdDiv = document.createElement("div");
    createdDiv.innerHTML = `<span>Created: </span><span id="date">${letterInfo.date_created}</span>`;

    const toDateDiv = document.createElement("div");
    toDateDiv.innerHTML = `<span>Can be opened: </span><span id="to-date">${letterInfo.date_user_can_open_letter}</span>`;

    dateContainer.appendChild(createdDiv);
    dateContainer.appendChild(toDateDiv);

    
    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "description-container";
    

    const p = document.createElement("p");
    p.id = "letter-description";
    p.textContent = letterInfo.description;

    descriptionDiv.appendChild(p);

    
    const statusDiv = document.createElement("div");
    statusDiv.className = "letter-status";

    const statusSpan = document.createElement("span");
    statusSpan.id = "can-open-letter";
    if (letterInfo.is_expired === true){
        statusSpan.textContent = "Can open!";
    }
    else{
        statusSpan.textContent = "You can`t open this letter yet!"
    }

    statusDiv.appendChild(statusSpan);

    
    letterContainer.appendChild(headerDiv);
    letterContainer.appendChild(dateContainer);
    if (letterInfo.is_expired === true){
        letterContainer.appendChild(descriptionDiv);
    }
    letterContainer.appendChild(statusDiv);

    return letterContainer;
}