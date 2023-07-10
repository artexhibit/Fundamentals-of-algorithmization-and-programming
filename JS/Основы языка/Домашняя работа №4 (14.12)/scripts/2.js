document.write(`<b>` + "Задание 2:" + `</b><br>`);

let products2 = [];
products2[0] = `Блины`;
products2[1] = `Квас`;
products2[2] = `Пельмени`;
products2[3] = `Икра`;

function printProduct2(products2) {
    for (let i = 0; i < products2.length; i++) {
        if (products2[i] !== undefined) {
            document.write(products2[i] + `<br>`);
        }
    }

    /* Через методы массивов:
    products2.filter((product) => {
    if (product !== undefined) return product;
    }).forEach(function (product) {
    document.write(product + `<br>`);
    });
    */
};
printProduct2(products2);