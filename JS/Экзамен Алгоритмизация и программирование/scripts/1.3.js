let sortDiv = document.createElement("div");
let sortLabel = document.createElement("p");
let optionSelect = document.createElement("select");
let orderSelect = document.createElement("select");
let sortOptions = ["автору", "названию", "стране", "языку", "году выпуска"];
let orderOptions = ["по убыванию", "по возрастанию"];

sortDiv.classList.add("sortSection");
sortLabel.textContent = "Сортировка по: ";
optionSelect.id = "optionSelect";
sortLabel.for = "optionSelect";

optionSelect.addEventListener("change", sortBooks);
orderSelect.addEventListener("change", sortBooks);

for (let i = 0; i < sortOptions.length; i++) {
    let option = document.createElement("option");
    option.value = i+1;
    option.textContent = sortOptions[i];
    optionSelect.append(option);
};

for (let i = 0; i < orderOptions.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = orderOptions[i];
    orderSelect.append(option);
};

sortDiv.append(sortLabel, optionSelect, orderSelect);
toolsDiv.append(sortDiv);

function sortBooks() {
    let nodesArray = [...contentDiv.childNodes];
    
    orderSelect.value == 0 ? descendingSort(nodesArray, optionSelect.value) : ascendingSort(nodesArray, optionSelect.value)

    nodesArray.forEach(node => { contentDiv.appendChild(node); })
}

function ascendingSort(array, option) {
    if (option == 1 || option == 2) {
        array.sort(function (a, b) {
            return a.childNodes[parseInt(option)].textContent > b.childNodes[parseInt(option)].textContent ? 1 : -1;
        });
    } else {
        let divFinder = option == 5 ? 4 : 3
        let nodeFinder = option == 4 || option == 5 ? 1 : 0

        array.sort(function (a, b) {
            return a.childNodes[divFinder].childNodes[nodeFinder].textContent > b.childNodes[divFinder].childNodes[nodeFinder].textContent ? 1 : -1;
        });
    }
}

function descendingSort(array, option) {
    if (option == 1 || option == 2) {
        array.sort(function (a, b) {
            return a.childNodes[parseInt(option)].textContent < b.childNodes[parseInt(option)].textContent ? 1 : -1;
        });
    } else {
        let divFinder = option == 5 ? 4 : 3
        let nodeFinder = option == 4 || option == 5 ? 1 : 0

        array.sort(function (a, b) {
            return a.childNodes[divFinder].childNodes[nodeFinder].textContent < b.childNodes[divFinder].childNodes[nodeFinder].textContent ? 1 : -1;
        });
    }
}
sortBooks();