# Основы языка Java Script. Самостоятельная работа №2

## Задание 1.
Создайте объект city (`let city = {}`), укажите у него свойства `name` со значением «ГородN» и `population` со значением 10 млн.

## Задание 2.
Создайте у объекта city метод `getProp`, которые выведет на странице (через `document.write`) последовательно все свойства и значения данного объекта:
 - каждую пару свойство - значение на отдельной строке 
 - подсказка: используйте циклы

## Задание 3.
Создайте у объекта `city` метод `getName`, который вернет `name` города.

## Задание 4.
Создайте метод `propToStr` у `city`. Этот метод должен возвращать информацию о городе в формате `«name=ГородN\npopulation=10000000\n»` (используйте циклы).

Не забудьте, что функции выводится не должны.

## Задание 5 (*).
Создайте функцию `getObj`, которая возвращает `this` (`return this`).

А у объекта `city` создайте метод `getCity`, который ссылается на `getObj`. 

Проверьте работу метода.
    
## Задание 6. 
Создайте массив `nums` с числовыми величинами 175, 35, 7, 10. 

Посчитайте в переменную `sum` сумму чисел в нем, при помощи цикла `for`.
    
## Задание 7 (**). 
Создайте двумерный массив `nums2` размером `n=3` элементов в каждом из которых будет `m=4` элементов из целых чисел (в каждый элемент поместить цифру 10). 

При создании двумерного массива используйте циклы.

## Задание 8.
Создайте массив `groups` и заполните их следующими элементами:

```js
ИСиП22/11, МТОР27/28, СТОР19/20, С11/12, СТ17/18

groups[0] = ИСиП22/11;
groups[3] = МТОР27/28;
groups[5] = СТОР19/20;
groups[6] = С11/12;
groups[8] = СТ17/18;
```
Выводите на страницу каждый элемент массива на отдельной строке (используйте цикл).

Итоговый вид `html` документа после исполнения должен быть следующий:

```html
ИСиП22/11,
МТОР27/28,
СТОР19/20,
С11/12,
СТ17/18
```