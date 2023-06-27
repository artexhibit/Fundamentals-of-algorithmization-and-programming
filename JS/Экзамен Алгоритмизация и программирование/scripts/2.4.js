let paginationDiv = document.createElement("div");
let switchDiv = document.createElement("div");
let paginationButtonsDiv = document.createElement("div");
let leftPaginationButton = document.createElement("button");
let rightPaginationButton = document.createElement("button");
let checkbox = document.createElement("input");
let paginationSwitchLabel = document.createElement("p");
let booksPerPage = 10;
let currentPage = 0;

leftPaginationButton.className = "paginationButton";
rightPaginationButton.className = "paginationButton";
paginationDiv.className = "paginationDiv";
paginationButtonsDiv.className = "paginationButtons";
switchDiv.className = "switch";

leftPaginationButton.textContent = "Назад";
rightPaginationButton.textContent = "Вперёд";
checkbox.type = "checkbox";
checkbox.id = "pageSwitch";
checkbox.name = "pageSwitch";
paginationSwitchLabel.for = "pageSwitch";
paginationSwitchLabel.textContent = "включить пагинацию";

switchDiv.append(checkbox, paginationSwitchLabel);
paginationButtonsDiv.append(leftPaginationButton, rightPaginationButton);
paginationDiv.append(paginationButtonsDiv, switchDiv);
toolsDiv.insertBefore(paginationDiv, toolsDiv.lastChild);

leftPaginationButton.addEventListener("click", movePageBack);
rightPaginationButton.addEventListener("click", movePageForward);
checkbox.addEventListener("click", checkboxClicked);

function checkboxClicked(event) {
    if (event.target.checked) {
        movePageForward();
        rightPaginationButton.classList.remove("disableButton");
    } else {
        let booksContent = document.querySelector(".booksContent");
        let totalBooks = booksContent.childNodes;
        currentPage = 0;
        totalBooks.forEach(book => { book.style.display = "flex"; })
        leftPaginationButton.classList.add("disableButton");
        rightPaginationButton.classList.add("disableButton");
    }
}

function movePageBack() {
    currentPage--;

    let booksContent = document.querySelector(".booksContent");
    let totalBooks = booksContent.childNodes;
    let startIndex = (currentPage - 1) * booksPerPage;
    let endIndex = startIndex + booksPerPage;

    totalBooks.forEach(book => { book.style.display = "none"; })

    for (let i = startIndex; i < totalBooks.length; i++) {
        totalBooks[i].style.display = i < endIndex ? "flex" : "none";
    }
    setButtonsState();
}

function movePageForward() {
    currentPage++;

    let booksContent = document.querySelector(".booksContent");
    let totalBooks = booksContent.childNodes;
    let startIndex = (currentPage - 1) * booksPerPage;
    let endIndex = startIndex + booksPerPage;

    totalBooks.forEach(book => { book.style.display = "none"; })

    for (let i = startIndex; i < totalBooks.length; i++) {
        totalBooks[i].style.display = i < endIndex ? "flex" : "none";
    }
    setButtonsState();
}

function setButtonsState() {
    let booksContent = document.querySelector(".booksContent");
    let totalBooks = booksContent.childNodes;
    let totalPages = Math.ceil(totalBooks.length / booksPerPage);

    if (currentPage != totalPages) { rightPaginationButton.classList.remove("disableButton"); }
    if (currentPage == 1) { leftPaginationButton.classList.add("disableButton"); }
    if (currentPage != 1) { leftPaginationButton.classList.remove("disableButton"); }
    if (currentPage == totalPages) { rightPaginationButton.classList.add("disableButton"); }
}
