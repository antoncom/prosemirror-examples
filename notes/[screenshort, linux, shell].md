# Скиншоты в Линукс из командной сроки
<br>
```
scrot -b -s
```

Выделяем область экрана мышью и.. файл со скриншотом находим в текущей папке.

Некоторые полезные опции:
<br>
```
-b при выборе окна, захватывает окно с рамкой
-d задаёт интервал задержки перед созданием снимка (scrot -d 5 сделает снимок через 5 секунд)
-q определяет качество изображения(от 0 до 100), по умолчанию стоит 75
-s позволяет выделить область для скриншота (после ввода необходимо мышкой выбрать прямоугольную область)
-t создаёт миниатюры, в процентах от оригинального размера
```

Остальное можно узнать по команде `man scrot`