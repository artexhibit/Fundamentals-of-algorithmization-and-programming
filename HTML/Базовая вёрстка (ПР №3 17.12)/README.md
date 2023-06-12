# Самостоятельная работа No3

## Создание формы обратной связи

Создайте форму по образцу, представленному ниже на изображении:

<img src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/HTML/Базовая%20вёрстка%20(ПР%20№3%2017.12)/image.png" alt="Result" width="500">

Форма должна включать в себя следующие элементы:

1.Выпадающий список «Город» (атрибут `name=city`) должен включать в себя следующие данные:

| value      | Текстовое значение |
| ----------- | :----: |
| -1   | Выберите город для продажи_______________________       |
| 0   | Москва        |
| 1   | Санкт-Петербург        |
| 2   | Новосибирск        |
| 3   | Воронеж        |
| 4   | Вологда        |
| 5   | Магадан        |

2.Выпадающий список «До метро (по карте)» (`name=distance`) должен включать в себя следующие данные:

| value      | Текстовое значение |
| ----------- | :----: |
| -1   | Выберите расстояние_______________________       |
| 500m   | До 7 мин. пешком (до 500 м.)        |
| 1000m   | До 15 мин. пешком (до 1 км.)       |
| 1500m   | До 21 мин. пешком (до 1,5 км.)        |
| 3000   | До 40 мин. пешком (до 3 км.)        |
| 5000   | До 1 часа пешком (до 5 км.)        |

А также следующие элементы формы, которые должны содержать следующие настройки в атрибутах

| Пункт      | Значение атрибута |
| ----------- | :----: |
| Материал здания   | ```name=type_material, type=checkbox, value = {0,1,2,3,4} //Какое-то одно из значений либо 0, либо 1```      |
| Общая площадь   | ```Первый input: type=text, name=basic_m_start, placeholder =от, size = 21, Второй input: type=text, name=basic_m_end, placeholder =до, size = 21```        |
| Площадь кухни   | ```Первый input: type=text, name=kitchen_m_start, placeholder =от, size = 21, Второй input: type=text,name=kitchen_m_end, placeholder =от, size = 21```      |
| Жилая площадь   | ```Первый input: type=text, name=live_m_start,placeholder =от, size = 21, Второй input: type=text, name=live_m_end, placeholder =от, size = 21```       |
| Год постройки   | ```Первый input: type=text, name=years_start, placeholder =от, size = 21, Второй input: type=text, name= years_end, placeholder =от, size = 21```        |
| Этаж   | ```Первый input: type=text, name=level_start, placeholder =от, size = 21, Второй input: type=text, name= level_end, placeholder =от, size = 21```      |
| Не последний   | ```type=checkbox, name=not_end```       |
| Продавец   | ```type = radio, name=saler, value = {0,1,2}```      |

Все пункты как показано выше на образце выделить жирным с применением тега (`strong`).

Сохранить задание под именем **«SRSWEB_3_1.html»**
