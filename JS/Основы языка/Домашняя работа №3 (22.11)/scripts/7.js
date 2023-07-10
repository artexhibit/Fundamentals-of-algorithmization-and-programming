//Задание 7. Создайте функцию m(a,b) оболочку для mul(). m() должна принимать два аргумента а возвращать результат работы mul() с этими двумя аргументами После выполнения задания поэкспериментируйте, создайте функцию log(), которая будет принимать одно значение, а вызывать  console.log() с этим значением.
			
function m(a, b) {
    //return mul(a, b); - без log()
    let toPrint = mul(a,b)
    return log(toPrint);
};

function mul(a, b) {
    return a * b;
};

function log(toPrint) {
    console.log(toPrint);
};
m(2, 9);