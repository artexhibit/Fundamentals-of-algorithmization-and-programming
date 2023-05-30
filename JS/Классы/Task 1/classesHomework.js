//1

class WorkerOne {
	constructor(name, surname, rate, days) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;
		this.days = days;
	};
	
	getSalary() {
		return this.rate * this.days;
	};
};
var alex = new WorkerOne("Alex", "Ovechkin", 1500, 30);
var john = new WorkerOne("John", "Snow", 800, 15);
document.write(`1. Создание класса:</br> Alex salary: ${alex.getSalary()},</br> John salary: ${john.getSalary()}</br> </br>`);

//2

class WorkerTwo {
	#name;
	#surname;
	#rate;
	#days;
	
	constructor(name, surname, rate, days) {
		this.#name = name;
		this.#surname = surname;
		this.#rate = rate;
		this.#days = days;
	};
	
	get name() {
		return this.#name;
	};
	get surname() {
		return this.#surname;
	};
	get rate() {
		return this.#rate;
	};
	get days() {
		return this.#days;
	};
};
var mike = new WorkerTwo("Mike", "Ross", 200, 20);
document.write(`2. Приватные свойства:</br> ${mike.name}, ${mike.surname}, ${mike.rate}, ${mike.days}</br> </br>`);

//3

class WorkerThree {
	constructor(name, surname, rate, days) {
		this.name = name;
		this.surname = surname;
		this.rate = rate;
		this.days = days;
	};
	
	set newRate(rate) {
		 this.rate = rate;
	};
	set newDays(days) {
		 this.days = days;
	};
};
var harvey = new WorkerThree("Harvey", "Spector");
harvey.newRate = 1000000;
harvey.newDays = 13;

document.write(`3. Методы-сеттеры:</br> ${harvey.rate}, ${harvey.days} </br> </br>`);

//4

class MyString {
	reverse(string) {
		var result = "";
		
		for (let i = string.length - 1; i >= 0; i--) {
			result += string[i];
		};
		return result;
	};
	
	ucFirst(string) {
		var result = "";
		return result = string[0].toUpperCase() + string.slice(1);
	};
	
	ucWords(string) {
		var splitString = string.split(" ");
		
		for (let i = 0; i < splitString.length; i++) {
			splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1);
		}
		return splitString.join(" ");
	};
};
var stringToTest = new MyString();

document.write(`4. Методы по преобразованию строки:</br> ${stringToTest.reverse("string")}, </br> ${stringToTest.ucFirst("honey")}, </br> ${stringToTest.ucWords("let's start a nuclear war!")} </br> </br>`);

//5

class Validator {
	isEmail(string) {
		const res = /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/;
		return res.test(string.toLowerCase());
	};
	
	isDomain(string) {
		const res = /^(?!-)[A-Za-z0-9-]+([-.]{1}[a-z0-9]+)*.[A-Za-z]{2,6}$/;
		return res.test(string);
	};
	
	isDate(string) {
		const res = /^\d{2}([./-])\d{2}\1\d{4}$/;
		return res.test(string);
	};
	
	isPhone(string) {
		const res = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
		return res.test(string);
	};
};
var testString = new Validator();

document.write(`5. Класс с регулярными выражениями:</br> ceo@igorcodes.ru почта? - ${testString.isEmail("ceo@igorcodes.ru")}, </br> www.igorcodes.ru домен? - ${testString.isDomain("www.igorcodes.ru")}, </br> 22.12.2023 дата? - ${testString.isDate("22.12.2023")}, </br> 8(910)999-99-99 - номер телефона? - ${testString.isPhone("8(910)999-99-99")} </br> </br>`);

//6

class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	};
	
	getFullName() {
		return `${this.name} ${this.surname}`;
	};
};

class Student extends User {
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
	};
	
	getCourse() {
		const currentYear = new Date().getFullYear();
		
		if (currentYear - this.year <= 5) {
			return `Current student's cource is ${currentYear - this.year}`;
		} else {
			return "The max study length is 5 years!";
		};
	};
};
var petya = new Student("Petya", "Kozlov", 2022);
document.write(`6. Наследование классов: </br> ${petya.getCourse()} </br>`);

//7

class ElemOne {
	constructor(selector) {
		this.selector = selector;
	};
	
	html(value) {
		this.selector.textContent = value;
		return this;
	}
	
	append(value) {
		this.selector.previousSibling.textContent = value;
		return this;
	}
	
	prepend(value) {
		this.selector.nextSibling.textContent = value;
		return this;
	}
	
	attr(name, value) {
		this.selector.setAttribute(name, value);
		return this;
	}
};

class ElemMult {
	constructor(selectors) {
		this.selectors = [];
		selectors.each(selector => { this.selectors.push(selector) });
	};
	
	html(value) {
		this.selectors.each(selector => {
			selector.textContent = value;
		});
		return this;
	};
	
	append(value) {
		this.selectors.each(selector => {
			selector.previousSibling.textContent = value;
		});
		return this;
	};
	
	prepend(value) {
		this.selectors.each(selector => {
			selector.nextSibling.textContent = value;
		});
		return this;
	};
	
	attr(name, value) {
		this.selectors.each(selector => {
			selector.setAttribute(name, value);
		});
		return this;
	};
};

//Сreating own "forEach function"
Array.prototype.each = function(callback){
	for (let i = 0; i < this.length; i++) {
		callback(this[i]);
	};
};

//8

class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	};
	
	get getWidth() {
		return this.width;
	};
	
	set setWidth(value) {
		this.width = value;
	};
	
	get getHeight() {
		return this.height;
	};
	
	set setHeight(value) {
		this.height = value;
	};
}

const rect = new Rectangle(20, 25);
rect.setWidth = 40;
rect.setHeight = 50;
document.write(`</br> 8. Работа с геттерами и сеттерами: </br> Новая высота: ${rect.getHeight}, </br> Новая ширина: ${rect.getWidth}`);




