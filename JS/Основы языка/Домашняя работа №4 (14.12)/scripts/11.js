document.write(`<b>` + "Задание 11:" + `</b><br>`);

getSubstring = (str, start, end) => {
    if (start >= 0 && end <= str.length) {
        document.write(str.slice(start, end));
    } else if (start < 0) {
        document.write(`Ваш стартовый индекс равен ${start}. Он не может быть меньше 0.`);
    } else {
        document.write(`Ваш конечный индекс равен ${end}. Он не может быть больше длины строки - ${str.length}.`);
    }
}
let result = getSubstring("Привет, как твои дела", 0, 21);