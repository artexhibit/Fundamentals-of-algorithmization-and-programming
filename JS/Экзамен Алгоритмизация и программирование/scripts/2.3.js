let carouselContainer = document.createElement("div");
let carouselContent = document.createElement("div");
let carouselButtonsContainer = document.createElement("div");
let leftCarouselButton = document.createElement("button");
let rightCarouselButton = document.createElement("button");
let prevIndex;
let functionCalled = true;

carouselContainer.className = "carouselContainer";
carouselContent.className = "carouselContent";
carouselButtonsContainer.className = "carouselButtons";
leftCarouselButton.className = "carouselButton";
rightCarouselButton.className = "carouselButton";

leftCarouselButton.textContent = "Назад";
rightCarouselButton.textContent = "Вперёд";

leftCarouselButton.addEventListener("click", moveCarouselBack);
rightCarouselButton.addEventListener("click", moveCarouselForward);

carouselButtonsContainer.append(leftCarouselButton, rightCarouselButton);

carouselContainer.appendChild(carouselContent);
carouselContainer.appendChild(carouselButtonsContainer);
slidersDiv.append(carouselContainer);

for (let i = 0; i < 10; i++) {
    let imageDiv = document.createElement("div");
    let carouselImage = document.createElement("img");

    if (i == 2) {
        carouselImage.classList.add("carouselBigImage");
    } else {
        carouselImage.classList.add("carouselNormalImage");
    }

    imageDiv.classList.add("imageContainer");
    imageDiv.append(carouselImage);
    carouselImage.src = parsedBooks[i].imageLink.split("-").join("_");
    carouselContent.append(imageDiv);
}

function moveCarouselBack() {
    if (functionCalled) {
        functionCalled = false;
        let currentIndex = 0;
        let images = document.querySelectorAll(".imageContainer");
        let imagesAmount = images.length;
        let bigImage = document.querySelector(".carouselBigImage");

        previousIndex = currentIndex;
        currentIndex = (currentIndex - 1 + imagesAmount);

        carouselContent.classList.add("moveCarousel");
        carouselContent.prepend(images[currentIndex]);

        setTimeout(() => {
            carouselContent.classList.remove('moveCarousel');
            carouselContent.classList.add("carouselTransition");

            bigImage.classList.remove("carouselBigImage");
            bigImage.parentElement.previousSibling.childNodes[0].classList.add("carouselBigImage");
        }, 10);

        setTimeout(() => {
            carouselContent.classList.remove("carouselTransition");
        }, 400);
    }
    setTimeout(() => { functionCalled = true; }, 410);
}

function moveCarouselForward() {
    if (functionCalled) {
        functionCalled = false;
        let currentIndex = 0;
        let images = document.querySelectorAll(".imageContainer");
        let bigImage = document.querySelector(".carouselBigImage");

        prevIndex = currentIndex;
        currentIndex++;

        carouselContent.classList.add("carouselTransition");
        carouselContent.classList.add("moveCarousel");

        bigImage.classList.remove("carouselBigImage");
        bigImage.parentElement.nextSibling.childNodes[0].classList.add("carouselBigImage");

        setTimeout(() => {
            carouselContent.appendChild(images[previousIndex]);
            carouselContent.classList.remove("carouselTransition", 'moveCarousel');
        }, 400);
    }
    setTimeout(() => { functionCalled = true; }, 410);
}
setInterval(moveCarouselForward, 2000);