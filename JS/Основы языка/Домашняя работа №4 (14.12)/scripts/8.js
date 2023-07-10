document.write(`<b>` + "Задание 8:" + `</b><br>`);

function getChar(someString, index) {
    if (index < someString.length) {
        document.write(someString.charAt(index) + `<br>`);
    } else if (index == someString.length) {
        document.write(`Индекс начинается с 0, поэтому последняя буква имеет индекс ${index - 1}. <br>`);
    } else {
        document.write(`Ваша строка состоит из ${someString.length} символов. Введите меньший индекс. <br>`);
    }
}
getChar("Привет", 0);