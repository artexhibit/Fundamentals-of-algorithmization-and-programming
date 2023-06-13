/* Задание 8(*) Найди двенадцатый элемент (let nFib = 12, el12;) последовательности Леонардо Пизанского (нужно использовать функцию Math.pow(число, степень)). Не забудьте округлить полученное число до целого — Math.round(число). Результат выведите на страницу с помощью document.write(); */

function findFibonacciNumber (nFib = 12, el12) {
	let squaredFive = Math.sqrt(5);
	el12 = Math.round((Math.pow((1 + squaredFive)/2, nFib) - Math.pow((1 - squaredFive)/2, nFib)) / squaredFive);
	return document.write(el12);
};

findFibonacciNumber(12);