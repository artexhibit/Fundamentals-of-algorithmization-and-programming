document.write(`<b>` + "Задание 10:" + `</b><br>`);

function getSplitArr(someString, separator) {
    if (someString.indexOf(separator) != -1) {
        document.write(someString.split(separator) + `<br>`);
    } else {
        document.write("В вашей строке нет такого разделителя. Введите другой" + `<br>`);
    }
}
getSplitArr("Сова/Медведь/Белка", "/");