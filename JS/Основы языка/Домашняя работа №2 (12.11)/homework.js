let city = {
    // Задание 1
    name: "ГородN",
    population: "10 млн", //можно ставить запятую у посл. свойства. Называется "висящая запятая"

    // Задание 2
    getProp: function () {
        for (let property in this) {
            if (typeof this[property] !== "function") {
                document.write(`${property} - ${this[property]}` + '<br>');
            };
        };
    },

    // Задание 3
    getName: function () {
        return document.write(this.name + '<br>');
    },

    // Задание 4
    propToStr: function () {
        this.population = "10000000";

        for (let property in this) {
            if (typeof this[property] !== "function") {
                document.write(`${property}=${this[property]}\n`);
            };
        };
    },

    // Задание 5
    getCity: getObj
};
// Задание 2
city.getProp();
// Задание 3
city.getName();
// Задание 4
city.propToStr();

// Задание 5
function getObj() {
    return this;
};
console.log(city.getCity());

// Задание 6
let nums = [175, 35, 7, 10];
let sum = 0;

// Вариант 1
for (let num in nums) {
    sum += nums[num];
};

/* Вариант 2
for (let num of nums) {
    sum += num;
};
*/

document.write('<br>' + sum);

// Задание 7
// Вариант 1. Сначала создаем внутренний массив из 10-ок, потом закидываем его в основной
let n = 3;
let m = 4;
let num = [];
let num2 = [];

for (let i = 0; i < m; i++) {
    num[i] = 10;
};
while (n !== 0) {
    num2.push(`[${num}]`);
    n -= 1;
};
document.write('<br>' + `[${num2}]` + '<br>');

// Вариант 2. Сначала создаём пустые массивы, потом закидываем их 10-ками
let n1 = 3;
let m1 = 4;
let num3 = [];

for (i = 0; i < n1; i++) {
    num3[i] = new Array();
};
// Еще можно 91 строку через num2.forEach(function(num) { while... });
for (let num of num3) {
    while (m1 !== 0) {
        num.push(10);
        m1 -= 1;
    };
    m1 = 4;
};
console.log(num3);

// Вариант 3. Со вложенным циклом
let n2 = 3;
let m2 = 4;
let num4 = [];

for (let i = 0; i < n2; i++) {
    num4[i] = [];

    for (let j = 0; j < m2; j++) {
        num4[i][j] = 10;
    };
};
console.log(num4);

// Задание 8
let groups = [];

groups[0] = "ИСиП22/11";
groups[3] = "МТОР27/28";
groups[5] = "СТОР19/20";
groups[6] = "С11/12";
groups[8] = "СТ17/18";

// Вариант 1
for (let i = 0; i < groups.length; i++) {
    if (groups[i] !== undefined) {
        document.write(groups[i] + '<br>');
    };
};
/*	 
    Вариант 2	
for (let group of groups) {
    document.write(group + '<br>');
};
*/