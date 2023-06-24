let slidersDiv = document.createElement("div");
let sliderDiv = document.createElement("div");
let buttonsDiv = document.createElement("div");
let leftButton = document.createElement("button");
let rightButton = document.createElement("button");
let leftButtonIcon = document.createElement("img");
let rightButtonIcon = document.createElement("img");
let rightButtonWasPressed;

let i = 1;

fetch('books.json')
    .then(response => response.json())
    .then(books => {
        for (let i = 0; i < 3; i++) {
            let sliderImage = document.createElement("img");
            sliderImage.classList.add("imgToDisplay");
            sliderImage.src = books[i].imageLink.split("-").join("_");
            sliderDiv.append(sliderImage);
        }
    });

leftButtonIcon.src = "images/left.png";
rightButtonIcon.src = "images/right.png";
buttonsDiv.classList.add("buttons");

leftButton.addEventListener("click", leftButtonPressed);
rightButton.addEventListener("click", rightButtonPressed);
leftButton.append(leftButtonIcon);
rightButton.append(rightButtonIcon);
buttonsDiv.append(leftButton, rightButton);
sliderDiv.classList.add("slideContent");
slidersDiv.classList.add("slidersContent");

slidersDiv.append(sliderDiv);
sliderDiv.append(buttonsDiv);

function leftButtonPressed() {
};

function rightButtonPressed() {

};

