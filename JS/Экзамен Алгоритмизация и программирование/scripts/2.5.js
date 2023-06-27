let modalBackground = document.createElement("div");
let modalContent = document.createElement("div");
let bookTitle = document.createElement("p");
let bookName = document.createElement("p");
let closeButton = document.createElement("button");
let closeButtonIcon = document.createElement("img");
let bookDescription = document.createElement("p");

modalBackground.className = "modalBackground";
modalContent.className = "modalContent";
closeButton.className = "closeButton";

closeButtonIcon.src = "images/closeIcon.png";

closeButton.addEventListener("click", closeModal);
modalBackground.addEventListener("click", closeModal);

closeButton.append(closeButtonIcon);
modalContent.append(closeButton, bookTitle, bookName, bookDescription);

function closeModal() {
    modalBackground.classList.add("hidden");
    modalContent.classList.add("hidden");

    if (modalContent.childNodes[1].nodeName == "IMG") {
        modalContent.removeChild(modalContent.childNodes[1]);
    }
}

function openModal(event) {
    modalBackground.classList.remove("hidden");
    modalContent.classList.remove("hidden");

    let modalImage = event.target.parentNode.childNodes[0].cloneNode();
    modalImage.classList.add("modalImage");

    modalContent.insertBefore(modalImage, modalContent.firstChild.nextSibling);
    bookTitle.textContent = event.target.parentNode.childNodes[1].textContent;
    bookName.textContent = event.target.parentNode.childNodes[2].textContent;
    bookDescription.textContent = "Рыбы (лат. Pisces) — обширная группа водных челюстноротых позвоночных животных, ранее считавшаяся надклассом. Рыбы характеризуются жаберным дыханием на всех этапах постэмбрионального развития организма. С точки зрения кладистики четвероногие являются специализированными лопастепёрыми рыбами."
}
closeModal();


