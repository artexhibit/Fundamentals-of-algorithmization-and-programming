/* Задание 5.
Напишите скрипт, который находит площадь прямоугольника высота 23см.(в числовую переменную height), 
шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s. Результат выведите в консоль */

function findRectangleArea (height, width) {
	if ((typeof height == 'number') && (typeof width == 'number')) {
		let s = height * width;
		return console.log(s);
	} else {
		return console.log("Введённые значения должны быть числами");
	};
};

findRectangleArea(23, 10);