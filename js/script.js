'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Ура все работает')

    const curvedTitle = document.querySelector('.big-slider .curved');
    let lastScrollY = window.scrollY;

    // Алгоритм:
    // 1. На scroll проверяем, находится ли элемент в зоне видимости.
    // 2. Если в зоне видимости — добавляем класс анимации.
    // 3. Если вышел за пределы экрана — убираем класс (анимация обратная).

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY;

        const rect = curvedTitle.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            if (isScrollingDown) {
                // Прокрутка вниз — прячем
                curvedTitle.classList.add('animate');
                console.log('Прокрутка вниз — скрываем заголовок');
            } else {
                // Прокрутка вверх — показываем
                curvedTitle.classList.remove('animate');
                console.log('Прокрутка вверх — показываем заголовок');
            }
        }

        lastScrollY = currentScrollY;
    });

        // Алгоритм:
        // 1. Получаем кнопку по ID.
        // 2. При прокрутке страницы:
        //    - Если прокрутка вниз более 300px — показываем кнопку.
        //    - Иначе — скрываем.
        // 3. При клике на кнопку — плавно прокручиваем страницу вверх.

        const goTopBtn = document.getElementById('goTopBtn');

        // Отслеживаем прокрутку страницы
        window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }
    });

        // Обработка клика по кнопке
        goTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    });

    // Алгоритм:
    // 1. Находим все элементы <h3> на странице и сохраняем их в переменной.
    // 2. Создаем функцию isInViewport, которая проверяет, находится ли элемент в зоне видимости окна браузера.
    // 3. Вешаем обработчик события 'scroll' на окно.
    // 4. При каждой прокрутке:
    //    - Перебираем все элементы <h3>.
    //    - Для каждого элемента проверяем, видим ли он в окне.
    //    - Если да — добавляем класс 'fade-in' (элемент плавно появляется).
    //    - Если нет — удаляем класс 'fade-in' (по желанию, чтобы можно было снова анимировать при повторной прокрутке).

    // 1. Получаем все <h3> элементы
        const h3Elements = document.querySelectorAll('h3');

    // 2. Функция для проверки, в зоне ли видимости элемент
        function isInViewport(el) {
            const rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        }

    // 3. Добавляем обработчик прокрутки
        window.addEventListener('scroll', () => {
            // 4. Перебираем каждый <h3> элемент
            h3Elements.forEach(h3 => {
                if (isInViewport(h3)) {
                    // Если элемент виден — показываем его
                    h3.classList.add('fade-in');
                    console.log('Элемент <h3> в зоне видимости — показываем');
                } else {
                    // Если элемент вне зоны видимости — скрываем (опционально)
                    h3.classList.remove('fade-in');
                    console.log('Элемент <h3> вне зоны видимости — скрываем');
                }
            });
        });
});

