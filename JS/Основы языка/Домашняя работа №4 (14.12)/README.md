# Самостоятельная работа №4

## Задание 1

Доработайте представленный исходный код таким образом, чтобы код `JavaScript` выводил в тело документа (`body`) массив представленный следующими элементами:

```js
Блины, Квас, Пельмени, Икра (Подсказка: let products = ['Блины', 'Квас', 'Пельмени', 'Икра']).
```

Итоговый вид `html` документа после исполнения должен быть следующий:

```html
Блины Квас Пельмени Икра
```

Шаблон кода для начала решения задачи представлен ниже:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/1.png" alt="Result" width="800">

## Задание 2

Внутри массивов могу быть неопределенные (`undefined`) значения. При выводе массива с пропусками в виде `undefined` значений внешний вид страницы может быть испорчен,
что также может приводить к отрицательным последствиям при взаимодействии с сайтом пользователей.

Доработайте код представленный в задании, таким образом, чтобы функция `printProduct` не выводила на печать `undefined` элементы.

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/2.png" alt="Result" width="800">

## Задание 3

Массивы можно объединять и конвертировать в одну строку. Рассмотрим пример конвертации массива в строку:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/3.png" alt="Result" width="500">

Команда `writeln` - делает печать на страницу и переводит каретку на новую строку. Но в `html` документах перевод каретки не отработает без явного указания сохранения форматирования.

Здесь может помочь тег `pre`. Например:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/4.png" alt="Result" width="500">

Возвращаясь к команде `document.writeln(arr)` следует отметить, что она произведет конвертацию массива в строку.

Если же нам нужно превратить массив в строку явно и при этом изменить разделитель (выше был разделитель по-умолчанию применена - запятая), то нам нужно написать следующий код:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/5.png" alt="Result" width="500">

Полный код примера выглядит следующим образом:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/6.png" alt="Result" width="500">

Для закрепления знаний доработайте код, который мы создавали в задании 4.2 (он представлен ниже) и осуществите вывод массива через `join` с применением символа разделителя `/`.

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/7.png" alt="Result" width="800">

## Задание 4

Также массивы можно сортировать. Метод `sort()` у массива позволяет отсортировать последний по алфавиту.

Например:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/8.png" alt="Result" width="500">

Реализуйте функцию, на вход которой будет подаваться массив, а на выходе будет строка с отсортированными элементами и разделенная символом `|`.

Ниже представлен шаблон для подготовки ответа:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/9.png" alt="Result" width="800">

## Задание 5

Вы, наверное, порядком устали сначала проверять на `undefined`. Результаты присваивать временному массиву и далее уже делать `join` и т.д.

Можно ли объединить 2 условия работы и скрыть `undefined` и отсортировать массив. Да и еще почему цифры идут впереди? Вдруг нам надо в конце их иметь?

Здесь нам поможет пользовательская сортировка массивов.

Рассмотрим следующий пример кода:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/10.png" alt="Result" width="500">

В данном отрывке кода мы увидели новый для нас метод `filter`.

Этот метод позволяет фильтровать массивы по различным условиям. Реализация фильтра была сделана внутри скобок метода `filter()` в виде функции, которая возвращает результат (Примечание: сразу не видно, то `item => {}` - это тело функции, которая будет вызвана столько раз, насколько велико значение `length` у массива).

Теперь давайте также еще сделаем сортировку результата:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/11.png" alt="Result" width="500">

Таким образом переменная `newArr` содержит массив из которого мы убрали `undefined` и отсортировали по алфавиту.

НО! Что если нам нужно сделать сортировку массива по собственным правилам? Как скорее всего догадался внимательный слушатель, нам нужно реализовать собственную функцию сортировки внутри скобок метод `sort()`.

Например:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/12.png" alt="Result" width="800">

Не стоит пугаться огромного кода. Все достаточно просто!

Рассмотрим на двух примерах их функции `compareElements`:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/13.png" alt="Result" width="500">

В функцию подается 2 аргумента, `а` и `b`. В условии проверяется если, `а` - это строка и `b` - это число. То тогда говорим через `return`, что первое значение больше второго. И, следовательно, нужно обменять местами строку и число.

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/14.png" alt="Result" width="500">

В функцию подается 2 аргумента, `а` и `b`. В условии проверяется если, `а` - это число и `b` - это строка. То тогда говорим через `return`, что второе значение больше первого. И следовательно нужно обменять местами число и строку.

В итоговом виде код будет выглядеть следующим образом:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/15.png" alt="Result" width="800">

Доработайте код таким образом, чтобы массив newArr был отсортирован следующим образом:

```
5|3|2|1|Фильмы|Поисковик|Контакты|Книги|Видео
```

## Задание 6

Для перебора массива можно использовать цикл `forEach`. Синтаксис следующий:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/16.png" alt="Result" width="500">

Задание создать функцию `getEvent()`, которая получает на вход массив (`let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 0]`) и применяя метод `forEach` возвернёт новый массив состоящий из четных чисел.

Шаблон функции следующий:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/17.png" alt="Result" width="500">

## Задание 7

Для объединения строк мы можем использовать 2 способа. 1-ый Вы узнали из самых первых уроков по `JavaScript`

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/18.png" alt="Result" width="600">

2-ой способ более мудрёный. Основан на том, что в языке `JS` все есть объект!

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/19.png" alt="Result" width="500">

`(new String)` - состоит из 2 этапов. 1-ый - это создание объекта типа строка, 2-ой - это оборачивание в скобки для того, чтобы созданный объект через `new String` смог начать жить как безымянный.

Далее метод `concat` и передача строк именно в той последовательности в какой хотите, чтобы произошло объединение.

Задание:

Создайте объект `person` добавьте свойства `name`, `surname`, а также методы `setName` (задает через переданный аргумент значение свойству `name`), `setSurname` (задает через переданный аргумент значение свойству `surname`) и наконец-то метод `getFullName`, который применяя способы конкатенации строк через метод `return` отдаст строку следующей структуры например: "Пушкин Александр".

## Задание 8

Создайте функцию `getChar()`, которая получает на вход строку и индекс символа, а отдает в качестве значения символ из строки.
Для реализации воспользуйтесь методом `charAt()`. Синтаксис метода следующий:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/20.png" alt="Result" width="500">

Т.е. метод `charAt` получает на вход индекс символа в строке (нумерация начинается с нуля) и отдает значение символа.

## Задание 9

Создайте функцию `getIndexOfChar()`, которая получает на вход строку и символ для поиска, а отдает в качестве значения индекс символа в строке. Если символа нет, то возвращает -1.

Для реализации воспользуйтесь методом `indexOf()`. Синтаксис метода следующий:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/21.png" alt="Result" width="500">

Т.е. метод `indexOf` получает на вход символ, а отдает значение индекса или -1 если не найдет.

## Задание 10

Создайте функцию `getSplitArr()`, которая получает на вход строку и символ разделителя, а отдает (возвращает через `return`) в качестве значения массив из строк.

Для реализации воспользуйтесь методом `split()`. Синтаксис метода следующий:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/22.png" alt="Result" width="600">

Прошу обратить внимание, что строка была задана с разделителем ", " (запятая и пробел). Если отдать на разделение просто запятую, результат будет следующий: 

```
["Саша", " Нина", " Илья", " Николай", " Ирина", " Дмитрий", " Алла"]
```

Таким образом метод `split` вызывается у строки и получает на вход символ, который выступит в качестве разделителя.

## Задание 11

Создайте функцию `getSubstring()`, которая получает на вход строку, индекс начала копирования строки и индекс конца копирования строки, а возвращает вырезанную строку.

Синтаксис вызова:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/23.png" alt="Result" width="500">

Шаблон для ответа следующий:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/Основы%20языка/Домашняя%20работа%20№4%20(14.12)/images/24.png" alt="Result" width="600">







