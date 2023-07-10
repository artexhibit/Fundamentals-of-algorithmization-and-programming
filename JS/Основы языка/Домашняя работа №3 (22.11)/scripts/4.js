//Задание 4. Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка
			
function repeat(str = "", n = 2) {
    let str1 = "";
    
    for (let i = 0; i < n; i++) {
        str1 += str;
    };
    console.log(str1);
};
repeat("n", 4);