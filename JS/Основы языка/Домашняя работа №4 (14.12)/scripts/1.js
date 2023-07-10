document.write(`<b>` + "Задание 1:" + `</b><br>`);

let products1 = ['Блины', 'Квас', 'Пельмени', 'Икра'];
window.products1 = [];

function printProduct1(arr) {
    let tmp = '';
    for (let i = 0; i < arr.length; i++) {
        tmp = tmp + products1[i] + '<br>';
    }
    document.write(tmp);
}
printProduct1(products1);