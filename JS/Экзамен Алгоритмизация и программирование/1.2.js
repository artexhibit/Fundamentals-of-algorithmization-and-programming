let toolsDiv = document.createElement("div");
let input = document.createElement("input");

input.type = "text";
input.name = "q";
input.placeholder = "Поиск...";
input.addEventListener("input", filterBooks);

toolsDiv.classList.add("tools");
toolsDiv.append(input);

function filterBooks(event) {
    main.lastChild.childNodes.forEach(div => {
        let matchIsFound = false;

        div.childNodes.forEach(child => {
            if (child.textContent.toLowerCase().includes(event.target.value.toLowerCase())) {
                matchIsFound = true;
            }
        });
        div.style.display = matchIsFound ? "flex" : "none"
    });
};