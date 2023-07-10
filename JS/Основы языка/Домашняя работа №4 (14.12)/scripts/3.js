document.write(`<b>` + "Задание 3:" + `</b><br>`);

let arr1 = [1, 2, 3, 4, 5, 6];
document.write(typeof arr1);
document.writeln(`<pre>` + arr1 + `</pre>`);
let arrToStr = arr1.join(`/`);
document.writeln(arrToStr + `<br>`);

let products3 = [];
products3[0] = `Блины`;
products3[1] = `Квас`;
products3[2] = `Пельмени`;
products3[3] = `Икра`;

function printProduct3(arr) {
    let tempArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != undefined) {
            tempArr.push(arr[i]);
        }
    }
    let result = tempArr.join(`/`);
    return document.write(result + `<br>`);
}
printProduct3(products3);