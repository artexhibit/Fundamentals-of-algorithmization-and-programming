//1.

function Card(from, to) {
	this.from = from;
	this.to = to;
	
	this.show = function () {
		return `${this.from}, ${this.to} <br>`;
	};
};

const c1 = new Card("Екатеринбург", "Москва");
document.write(`1. ${c1.show()} <br>`)

//2.

let initData = [["Коля", "23", "180"], ["Даша", "19", "170"], ["Ваня", "18", "192"], ["Петя", "45", "178"], ["Вася", "34", "197"], ["Джони", "40", "168"], ["Катя", "37", "160"], ["Петя", "29", "200"], ["Соня", "21", "172"], ["Женя", "2", "17"]];
let humans = [];

class Human {
	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	};
	
	getInfo() {
		return `${this.name}, ${this.age}, ${this.height}`;
	};
	
	getName() {
		return this.name;
	};
};

initData.forEach(entry => {
	const human = new Human(entry[0], parseInt(entry[1]), parseInt(entry[2]))
	humans.push(human);
});

document.write(`2. Массив humans создан. В нём ${humans.length} объектов <br>`)

//Использован алгоритм быстрой сортировки
function sortByName(array) {
	if (array.length < 2) { return array; };
	
	let smallestArray = [];
	let biggestArray = [];
	let baseElement = array.length - 1;
	
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i].name < array[baseElement].name) {
			smallestArray.push(array[i]);
		} else {
			biggestArray.push(array[i]);
		};
	}
	return [...sortByName(smallestArray), array[baseElement], ...sortByName(biggestArray)]
};

function sortByHeight(array) {
	//базовый случай
	if (array.length < 2) { return array; };
	//рекурсивный случай
	let smallestArray = [];
	let biggestArray = [];
	let baseElement = array.length - 1;
	
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i].height > array[baseElement].height) {
			smallestArray.push(array[i]);
		} else {
			biggestArray.push(array[i]);
		};
	}
	return [...sortByHeight(smallestArray), array[baseElement], ...sortByHeight(biggestArray)]
};
humans = sortByHeight(humans);
document.write("<br> 3. Результат вызова функции sortByHeight:");
humans.forEach(human => {
	document.write(`<br> ${human.getInfo()}`);
});
document.write("<br>")

//4.
let month = 5;

Number.prototype.getDays = function (year, month) {
	return new Date(year, month, 0).getDate();
};

Number.prototype.getMonthName = function (month) {
	let date = new Date();
	date.setMonth(month - 1);
	return date.toLocaleDateString("ru-RU", { month: "long" });
};

document.write(`<br> 4. <br> Функция getDays: <br> Выбранный месяц: ${Number().getMonthName(month)}. В нем дней: ${Number().getDays(2023, month)} <br>`);

Number.prototype.isOdd = function (number) {
	return number % 2 != 0 ? true : false
};

Number.prototype.calendar = function (year, month, containerId) {
	if (month <= 0 || year <= 0) {
		document.write("Введите корректное значение!")
	} else {
		let days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
		let container = document.querySelector(containerId);
		let table = document.createElement("table");
		let tbody = document.createElement("tbody");
		
		let thead = document.createElement("thead");
		let row = document.createElement("tr");
		let column = document.createElement("td");
		
		column.colSpan = 7;
		column.setAttribute("id", "head");
		row.append(column);
		thead.append(row);
		
		let rowsAmount = 0;
		let firstDayOfMonth = new Date(year, month - 1, 1);
		let monthDays = new Date(year, month, 0).getDate();
		let firstMonthDayInWeekNumber = getFirstMonthDayInWeekNumber();
		let dayName = firstDayOfMonth.toLocaleString('ru', { weekday: 'short' });
		let monthName = firstDayOfMonth.toLocaleString('ru', { month: 'long' });
		let numberOfWeeks = Math.ceil(monthDays / 7) + 1;
		rowsAmount = (dayName == "вс" || dayName == "сб") ? 7 : numberOfWeeks
		
		column.innerHTML = `${monthName}, ${year}`
		
		function getFirstMonthDayInWeekNumber() {
			return firstDayOfMonth.getDay() == 0 ? 7 : firstDayOfMonth.getDay();
		}
		
		let monthDaysArr = Array.from(Array(monthDays), (_, i) => i + 1);
		
		for (let i = 0; i < rowsAmount; i++) {
			let row = document.createElement("tr");
			
			for (let j = 0; j < 7; j++) {
				let column = document.createElement("td");
				if (i == 0) {
					column.innerHTML = days[j];
				};
				row.append(column);
			};
			tbody.append(row);
		};
		
		let trArray = [...tbody.childNodes];
		let tdArray = [];
		
		for (let i = 0; i < trArray.length; i++) {
			if (i != 0) {
				let td = [...trArray[i].childNodes];
				tdArray.push(...td);
			};
		};
		
		let count = 0;
		let setUpNextMonthNumber = 1;
		
		function setUpPrevMonthNumbers(i) {
			let numbersArray = [];
			let sectionsToInsert = firstMonthDayInWeekNumber - 1;
			let previousMonthLastDay = new Date(year, month - 1, 0).getDate();
			
			for (let i = 0; i < sectionsToInsert; i++) {
				const value = previousMonthLastDay - i;
				numbersArray.push(value);
			};
			numbersArray.reverse();
			return numbersArray[i]
		}
		
		for (let i = 0; i < tdArray.length; i++) {
			if (i < firstMonthDayInWeekNumber - 1) {
				tdArray[i].innerHTML = setUpPrevMonthNumbers(i);
				tdArray[i].setAttribute("id", "empty");
			} else if (i >= (monthDaysArr.length + firstMonthDayInWeekNumber - 1)) {
				tdArray[i].innerHTML = setUpNextMonthNumber;
				tdArray[i].setAttribute("id", "empty");
				setUpNextMonthNumber += 1
			} else {
				tdArray[i].innerHTML = monthDaysArr[count];
				count++;
			};
		};
		table.append(thead);
		table.append(tbody);
		container.append(table);
	}
};

let number = 21;
document.write(`<br> Функция isOdd: <br> Число ${number} нечетное? - ${Number().isOdd(number)} <br>`);
document.write(`<br> Функция calendar(year, month):`);