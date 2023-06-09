//Задание 1: создание элементов
let dataInit = ["Живопись", "Музыка", "Скульптура"];
const hrefNames = ["Добавить в конец", "Добавить в начало", "Добавить и отсортировать", "Удалить"];
const hrefDiv = document.createElement("div");
const main = document.querySelector("main");
const ul = document.createElement("ul");
ul.setAttribute("id", "list");
ul.addEventListener("click", makeRed);
ul.addEventListener("dblclick", showInput);
main.appendChild(ul);
main.appendChild(hrefDiv);

dataInit.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element;
    ul.append(li);
})
hrefNames.forEach(name => { createHref(name); })

function createHref(name) {
    let href = document.createElement("a");
    href.textContent = name;
    hrefDiv.appendChild(href);

    if (href.textContent == "Добавить в конец") {
        href.addEventListener("click", createListAtTheEnd);
    } else if (href.textContent == "Добавить в начало") {
        href.addEventListener("click", createListAtTheBeginning);
    } else if (href.textContent == "Добавить и отсортировать") {
        href.addEventListener("click", createListAlphabetically);
    } else if (href.textContent == "Удалить") {
        href.addEventListener("click", deleteElement);
    }
}
//Задание 1: добавить элемент в конец списка
function createListAtTheEnd() {
    let text = prompt("Введите текст");

    if (text !== "" && text !== null) {
        const li = document.createElement("li");
        li.textContent = text;
        ul.append(li);
    }
};
//Задание 1: добавить элемент в начало списка
function createListAtTheBeginning() {
    let text = prompt("Введите текст");

    if (text !== "" && text !== null) {
        const li = document.createElement("li");
        li.textContent = text;
        ul.prepend(li);
    }
};
//Задание 1: добавить элемент, чтобы он оставался отсортированным по алфавиту
function createListAlphabetically() {
    let text = prompt("Введите текст");

    if (text !== "" && text !== null) {
        const li = document.createElement("li");
        li.textContent = text;
        ul.append(li);

        const sortedNodes = Array.from(ul.childNodes).sort(function (a, b) {
            return a.textContent > b.textContent ? 1 : -1;
        });
        sortedNodes.forEach(node => { ul.appendChild(node); });
    }
};
//Задание 2
function deleteElement() {
    const redElement = [...ul.childNodes].find(node => node.style.color == "red");

    const okPressed = redElement ? confirm(`Удалить пункт ${redElement.firstChild.textContent}?`) : confirm(`Удалить пункт ${ul.lastChild.firstChild.textContent}?`);

    if (okPressed && redElement) {
        ul.removeChild(redElement);
    } else if (okPressed) {
        ul.removeChild(ul.lastChild);
    }
};
//Задание 3 *удаление используется по ссылке Удалить из второго задания
function makeRed(event) {
    [...ul.childNodes].forEach(node => { node.style.color = "black"; })
    if (event.target.tagName == "LI") { event.target.style.color = "red"; }
};
//Задание 4
function createInput() {
    const div = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    button.textContent = "Добавить";
    button.addEventListener("click", createListAfterTargetLi);
    div.classList = "show";
    div.append(input);
    div.append(button);

    return div
}

function showInput(event) {
    if (event.target.children.length < 1) {
        const div = createInput();

        event.target.append(div);
        hideAnotherInputs(event.target);
    }
    hideAnotherInputs(event.target);
}

function hideAnotherInputs(targetLi) {
    [...ul.childNodes].forEach(li => {
        if (li.lastChild.tagName == "DIV" && !li.lastChild.classList.contains("hide")) {
            li.lastChild.classList.toggle("hide");
        } else if (li.textContent == targetLi.textContent) {
            targetLi.lastChild.classList.toggle("hide");
        }
    })
}

function createListAfterTargetLi(event) {
    const input = event.target.previousSibling;
    const parentLi = event.target.parentElement.parentElement;

    if (input.value !== "" && input.value != null) {
        const li = document.createElement("li");
        li.textContent = input.value;
        input.value = "";
        parentLi.after(li);
        parentLi.lastChild.classList.toggle("hide");
    }
}