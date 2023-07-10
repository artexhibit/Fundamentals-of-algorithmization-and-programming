document.addEventListener("DOMContentLoaded", function () {
    let pickedButton = document.querySelector("input[name=select]:checked");
    changeContent(pickedButton);
});

let div = document.querySelector(".result");
let h3 = document.createElement("h3");
let p = document.createElement("p");
h3.textContent = "Выбранный элемент";

let radioButtons = document.querySelectorAll("input[name=select]");

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function () { changeContent(this) });

    function changeContent(button) {
        let buttonNodes = button.parentElement.parentElement.childNodes;

        let obj = {
            id: buttonNodes[1].textContent,
            from: buttonNodes[3].textContent,
            dateFrom: buttonNodes[5].textContent,
            to: buttonNodes[7].textContent,
            dateTo: buttonNodes[9].textContent,
            price: buttonNodes[11].textContent
        };

        p.innerHTML =
            "Код: " + obj.id + "<br>" +
            "Откуда: " + obj.from + "<br>" +
            "Дата и время вылета: " + obj.dateFrom + "<br>" +
            "Куда: " + obj.to + "<br>" +
            "Дата и время прилета: " + obj.dateTo + "<br>" +
            "Цена: " + obj.price + "<br>"

        div.append(h3);
        div.append(p);

        console.log(obj)
    }
}