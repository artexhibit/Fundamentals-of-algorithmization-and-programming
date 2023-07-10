const rowDiv = document.querySelector(".row");
const div = document.createElement("div");
const image = document.createElement("img");
const title = document.createElement("p");
const description = document.createElement("p");
div.classList.add("col");
const elements = [image, title, description];
elements.forEach(element => div.appendChild(element));


obj.forEach(block => {
    image.setAttribute('src', block.img);
    title.textContent = block.name;
    description.textContent = block.text;
    let newDiv = div.cloneNode(true);
    rowDiv.append(newDiv);
});