/* Задание 7. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ). Результат выведите в консоль */

function findHypotenuse (n, m) {
	if ((typeof n == 'number') && (typeof m == 'number')) {
		let nSquared = Math.pow(n, 2);
		let mSquared = Math.pow(m, 2);
		let hypotenuse = Math.sqrt(nSquared + mSquared);
		
		return console.log(hypotenuse);
	} else {
		return console.log("Введённые значения должны быть числами");
	};
};

findHypotenuse(3, 4);