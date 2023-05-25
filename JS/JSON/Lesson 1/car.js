/*
значение элементов массива
0 - идентификатор
1 - модель
2 - тип ДВС
3 - мощность л.с.
4 - расположение цилиндров
5 - рабочий объем
6 - число цилинров
7 - путь к изображению
*/

var carJSON = '{ "toyota": [["1", "Toyota Land Cruiser", "Дизельный", "249", "V-образный", "4461", "8", "images/LandCruiser.jpg"], ["2", "Toyota Land Cruiser Prado", "Бензиновый", "163", "Рядный", "2694", "4", "images/LandCruiserPrado.jpg"], ["3", "Toyota Camry", "Бензиновый", "150", "Рядный", "1998", "4", "images/ToyotaCamry.jpg"]], "mitsubishi": ["4", "Mitsubishi Pajero Sport", "Дизельный", "181", "Рядный", "2442", "4", "images/MitsubishiPajeroSport.jpg"], "bmw": [["5", "BMW 8 Gran Coupe", "Дизельный", "320", "Рядный", "2998", "6", "images/BMW8GranCoupe.jpg"], ["6", "BMW 4", "Бензиновый", "184", "Рядный", "1998", "4", "images/BMW4.jpg"]] }';

var parsedJSON = JSON.parse(carJSON);
