/* Задание 6. Напишите скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v. Результат выведите в консоль */

function findCylinderVolume (heightC, dC) {
	if ((typeof heightC == 'number') && (typeof dC == 'number')) {
		const pi = 3.1415926535;
		let dSquared = Math.pow(dC, 2)
		let v = heightC * pi * dSquared / 4; //или можно как d**2
		return console.log(v);
	} else {
		return console.log("Введённые значения должны быть числами");
	};
};

findCylinderVolume(10, 4);