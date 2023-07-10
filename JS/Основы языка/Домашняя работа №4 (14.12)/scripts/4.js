document.write(`<b>` + "Задание 4:" + `</b><br>`);

let arr2 = [`Книги`, `Фильмы`, `Видео`, `Контакты`, `Поисковик`, 1, 5, 3, 2];
sortAndJoin = (unsortedArr) => {
    let tempArr = []

    unsortedArr.sort().forEach(element => {
        if (element !== undefined) {
            tempArr.push(element);
        }
    });
    unsortedArr.join(`|`);
    return unsortedArr;
};
document.write(sortAndJoin(arr2) + `<br>`);