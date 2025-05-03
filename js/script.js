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
});

