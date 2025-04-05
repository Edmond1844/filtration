| Файл                        | Функция                                | Комментарий                                                                 |
|-----------------------------|-----------------------------------------|------------------------------------------------------------------------------|
| **api.js**                  | `getData(url)`                          | Загружает url с сервера |

| **load.js**                 | `loadProducts()`                        | Получает данные и отрисовывает. Вызывается в Main.js                         |

| **render.js**               | `renderProducts(item)`                  | Рендерит одну карточку товара и добавляет её в DOM. Используется в функции loadProducts|

| **main.js**                 | —                                       | Главный файл в ктором вызываются функции  button(), loadProducts(), toggleBtn()|

| **addBtn.js**               | `button()`                              | Создаёт кнопки фильтрации и сортировки, навешивает события на них. Вызов в Main.js     |
|                             | `addBtn(btnList, cardProductList)`      |        |

| **filter.js**              | *(закомментировано)* `filterProducts(type, list)` | Получает 2 параметра: filterType, cardProductList. где cardProductList это переменная DOM элемета. Где filterType значение атрибута у кнопки фильтрации data-filter | 

| **sort.js**                | *(закомментировано)* `sortProducts(type, list)`  | Получает 2 параметра:  sortType, cardProductList. где cardProductList это переменная DOM элемета.  Где sortType значение атрибута у кнопки фильтрации data-sort |

| **searchProducts.js**      | *(закомментировано)* `check(products, input, form)` | Получает 3 параметра: products, searchInput, searchForm. Где products это массив товаров который нахотся в файле data.js. searchInput DOM элемент поле ввода. searchForm                   |

|**store.js**|               | `setThemeColor, getThemeColor` |         | В store.js есть пустой массив для получения цвета фона и 2 функции|

| **toggleBackgroundColor** | | `toggleBtn()` |  | Переключает цвет фона с белого на серый |

