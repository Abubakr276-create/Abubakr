'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Ура все работает')

    const curvedTitle = document.querySelector('.big-slider .curved');
    let hasAnimated = false; 

    // Алгоритм:
    // 1. Отслеживаем событие прокрутки (scroll).
    // 2. Проверяем, находится ли элемент в области видимости.
    // 3. Если да, добавляем анимационный класс и выводим в консоль сообщение.
    // 4. Если уже анимирован, ничего не делаем.

    window.addEventListener('scroll', () => {
        const rect = curvedTitle.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight && !hasAnimated) {
            curvedTitle.classList.add('animate');
            console.log('Анимация запущена! Прокрутка достигла элемента.');
            hasAnimated = true;
        }
    });
});

