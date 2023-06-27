let slidersDiv = document.createElement("div");
let sliderOneDiv = document.createElement("div");
let sliderOneContent = document.createElement("div");
let buttonsDiv = document.createElement("div");
let leftButton = document.createElement("button");
let rightButton = document.createElement("button");
let leftButtonIcon = document.createElement("img");
let rightButtonIcon = document.createElement("img");
let previousIndex;

for (let i = 0; i < 3; i++) {
    let sliderImage = document.createElement("img");
    sliderImage.classList.add("sliderImage");
    sliderImage.src = parsedBooks[i].imageLink.split("-").join("_");
    sliderOneContent.append(sliderImage);
}

leftButtonIcon.src = "images/left.png";
rightButtonIcon.src = "images/right.png";
buttonsDiv.classList.add("buttons");

leftButton.addEventListener("click", moveSlideBack);
rightButton.addEventListener("click", moveSlideForward);
leftButton.append(leftButtonIcon);
rightButton.append(rightButtonIcon);
buttonsDiv.append(leftButton, rightButton);
sliderOneDiv.classList.add("sliderOne");
sliderOneContent.classList.add("sliderOneContent");
slidersDiv.classList.add("slidersContent");

slidersDiv.append(sliderOneDiv);
sliderOneDiv.append(sliderOneContent);
sliderOneDiv.append(buttonsDiv);

function moveSlideBack() {
    let currentIndex = 0;
    let images = document.querySelectorAll(".sliderImage");
    let imagesAmount = images.length;

    previousIndex = currentIndex;
    currentIndex = (currentIndex - 1 + imagesAmount);

    sliderOneContent.classList.add("moveSlide");
    sliderOneContent.prepend(images[currentIndex]);

    setTimeout(() => {
        sliderOneContent.classList.remove('moveSlide');
        sliderOneContent.classList.add("sliderTransition");
    }, 10);

    setTimeout(() => {
        sliderOneContent.classList.remove("sliderTransition");
    }, 400);
};

function moveSlideForward() {
    let currentIndex = 0;
    let images = document.querySelectorAll(".sliderImage");

    previousIndex = currentIndex;
    currentIndex++;

    sliderOneContent.classList.add("sliderTransition");
    sliderOneContent.classList.add("moveSlide");

    setTimeout(() => {
        sliderOneContent.appendChild(images[previousIndex]);
        sliderOneContent.classList.remove("sliderTransition", 'moveSlide');
    }, 400);
};
setInterval(moveSlideForward, 2000);

