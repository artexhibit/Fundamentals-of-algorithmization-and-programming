const photoContainer = document.querySelector("#photoContainer");
const photo = document.querySelector("#photo");
const prevPhotoButton = document.querySelector("#prevPhoto");
const nextPhotoButton = document.querySelector("#nextPhoto");
const slideShowButton = document.querySelector("#slideShow");
var clickedImage;
var interval;
var fullImage = document.createElement("img");

prevPhotoButton.addEventListener("click", navigationButtonsClicked);
nextPhotoButton.addEventListener("click", navigationButtonsClicked);
slideShowButton.addEventListener("click", slideShowButtonClicked);

//1.Create and add images to photoContainer
photos.forEach(name => {
    const image = document.createElement("img");
    image.classList = "img";
    image.src = `images/${name}`;
    photoContainer.append(image);
    image.addEventListener("click", showFullImage);
});

//method to always display full photo when page is loaded
showFullImageWhenPageLoaded();

//2.Add a full image to photo section after user clicked on a small one
function showFullImage(event) {
    removeFullPhotoIfNeeded();

    fullImage.classList = "fullImg";
    fullImage.src = event.target.src;
    photo.append(fullImage);
    clickedImage = event.target;

    createImageMap();
    createBorderForClickedImage();
};

//3.Change full image in photo section after click on prev or next button
function navigationButtonsClicked(event) {
    removeFullPhotoIfNeeded();

    event.target.id == "prevPhoto" ? changeImageFromLeftToRight() : changeImageFromRightToLeft()
    photo.append(fullImage);
};

//5.Switching images each 2 seconds by clicking on a slideShow button
//Add option to stop the slideShow by one more click on the button
function slideShowButtonClicked() {
    if (!interval) {
        interval = setInterval(switchImage, 2000);
        slideShowButton.textContent = "Остановить слайдшоу";
    } else {
        clearInterval(interval);
        slideShowButton.textContent = "Запустить слайдшоу";
    };
};

function switchImage() {
    removeFullPhotoIfNeeded();

    clickedImage = [...photoContainer.childNodes].find(node => node.src == clickedImage.src);

    if (clickedImage.nextSibling == null) {
        clickedImage = photoContainer.firstChild;
        fullImage.src = clickedImage.src;
        clearInterval(interval);
    } else {
        fullImage.src = clickedImage.nextSibling.src;
        clickedImage = clickedImage.nextSibling;
    }
    photo.append(fullImage);

    createImageMap();
    createBorderForClickedImage();
};

//Check if photo section is empty, if not - remove displaying photo, because we need to show only one full photo at a time
function removeFullPhotoIfNeeded() {
    if (photo.childNodes.length != 0) {
        photo.removeChild(photo.lastChild);
    };
};

function showFullImageWhenPageLoaded() {
    if (photo.childNodes.length == 0) {
        fullImage.src = photoContainer.firstChild.src;
        fullImage.classList = "fullImg";
        clickedImage = fullImage;
        photo.append(fullImage);

        createImageMap();
        createBorderForClickedImage();
    };
};

//6.Using area map to switch images by clicking on full photo right and left side
function createImageMap() {
    const map = document.createElement("map");
    const rightArea = document.createElement("area");
    const leftArea = document.createElement("area");

    photo.firstChild.useMap = "#changeImage";

    rightArea.shape = "rect";
    rightArea.coords = "583,0,639,479";
    rightArea.title = "right";
    leftArea.shape = "rect";
    leftArea.coords = "90,1,0,479";
    leftArea.title = "left";

    rightArea.addEventListener("click", areaClicked);
    leftArea.addEventListener("click", areaClicked);
    map.name = "changeImage";
    map.appendChild(rightArea);
    map.appendChild(leftArea);

    photo.append(map);
}

function areaClicked(event) {
    if (event.target.title == "left") {
        changeImageFromLeftToRight();
    } else {
        changeImageFromRightToLeft();
    }
};

function changeImageFromLeftToRight() {
    clickedImage = [...photoContainer.childNodes].find(node => node.src == clickedImage.src);

    //4.1 If statement to loop a photo display in the gallery if click on prevButton
    if (clickedImage.previousSibling == null) {
        clickedImage = photoContainer.lastChild;
        fullImage.src = clickedImage.src;
    } else {
        fullImage.src = clickedImage.previousSibling.src;
        clickedImage = clickedImage.previousSibling;
    }
    createBorderForClickedImage();
};

function changeImageFromRightToLeft() {
    clickedImage = [...photoContainer.childNodes].find(node => node.src == clickedImage.src);

    //4.2 If statement to loop a photo display in the gallery if click on nextButton
    if (clickedImage.nextSibling == null) {
        clickedImage = photoContainer.firstChild;
        fullImage.src = clickedImage.src;
    } else {
        fullImage.src = clickedImage.nextSibling.src;
        clickedImage = clickedImage.nextSibling;
    }
    createBorderForClickedImage();
};

function createBorderForClickedImage() {
    const miniImages = [...photoContainer.childNodes];

    miniImages.forEach(img => {
        img.src == clickedImage.src ? img.classList.add("showBorder") : img.classList.remove("showBorder")
    });
}