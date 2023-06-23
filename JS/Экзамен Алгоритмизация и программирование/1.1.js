let contentDiv = document.createElement("div");

let bookDiv = document.createElement("div");
let languageDiv = document.createElement("div");
let numbersDiv = document.createElement("div");
let image = document.createElement("img");
let author = document.createElement("p");
let country = document.createElement("p");
let language = document.createElement("p");
let pages = document.createElement("p");
let title = document.createElement("p");
let year = document.createElement("p");
let button = document.createElement("button");

button.textContent = "Подробнее";
bookDiv.classList.add("bookContent");
languageDiv.classList.add("langSection");
numbersDiv.classList.add("numbSection");
contentDiv.classList.add("content");

country.title = "Страна";
language.title = "Язык книги";
year.title = "Год выпуска";
pages.title = "Количество страниц";

languageDiv.append(country, language);
numbersDiv.append(pages, year);
bookDiv.append(image, author, title, languageDiv, numbersDiv, button)

//1.receive content from JSON 
fetch('books.json')
    .then(response => response.json())
    .then(books => {
//2.insert data into html blocks
        books.forEach(book => {
            image.src = book.imageLink.split("-").join("_");
            author.textContent = book.author;
            title.textContent = book.title;
            country.textContent = `🌎 ${book.country}`;
            language.textContent = `🗣 ${book.language}`;
            pages.textContent = `📘 ${book.pages}`;
            year.textContent = `🪶 ${book.year}`;

            let newDiv = bookDiv.cloneNode(true);
            contentDiv.append(newDiv);
        });
        window.onload = sortBooks();
    });