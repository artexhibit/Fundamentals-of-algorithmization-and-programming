document.write(`<b>` + "Задание 6:" + `</b><br>`);

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 0];

function getEvent(arr) {
    let resultArray = [];

    arr.forEach(number => {
        if (number % 2 == 0) {
            resultArray.push(number);
        }
    });
    document.write(resultArray + `<br>`);
}
getEvent(myArr);