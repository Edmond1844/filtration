| Файл                        | Функция                                | Комментарий                                                                 |
|-----------------------------|-----------------------------------------|------------------------------------------------------------------------------|
| **api.js**                  | `getData(url)`                          | Загружает url с сервера |

| **load.js**                 | `loadProducts()`                        | Получает данные и отрисовывает. Вызывается в Main.js                         |

| **renderProducts.js**       | `renderProducts(item)`                  | Рендерит одну карточку товара и добавляет её в DOM. Используется в функции loadProducts|

| **main.js**                 | —                                       | Главный файл в ктором вызываются функции  renderSortButtons(), loadProducts(), toggleBtnThemeColor()|

| **renderSortButtons.js**    | `renderSortButtons()`                   | Создаёт кнопки фильтрации и сортировки, навешивает события на них. Вызов в Main.js     |
|                             |      |        |

| **filterProducts.js**       |  `filterProducts(type)` | Получает 1 раметра: filterType. Где filterType значение атрибута у кнопки фильтрации data-filter | 

| **sort.js**                 |  `sortProducts(type)`   | Получает 1 параметр:  sortType. Где sortType значение атрибута у кнопки фильтрации data-sort. Происходит сортировка товара. |

| **searchProducts.js**       | *(закомментировано)* `check(products, input, form)` | Получает 3 параметра: products, searchInput, searchForm. Где products это массив товаров который нахотся в файле data.js. searchInput DOM элемент поле ввода. searchForm                   |

|**store.js**|                | `setThemeColor(), getThemeColor()` |         | В store.js есть пустой массив для получения цвета фона и 2 функции |

| **toggleThemeColor** |      | `toggleThemeColor()` |  | Переключает цвет темы |

| **cart.js** |               | `cart()` |  | Создает корзину для товара. Функция вызывается в renderProducts() |

