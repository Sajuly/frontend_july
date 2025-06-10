
(function() {
  "use strict";

  const root = document.documentElement;  // Получаем корневой элемент документа (обычно это <html>)

  // --------------- Изменяем навигационную панель для < 1020px --------------------

  // Находим элемент навигации с id "js-navToggle"
  const navToggle = document.querySelector("#js-navToggle")  

  // Добавляем обработчик события "click" на элемент navToggle
  navToggle.addEventListener("click", function() {  
    // Переключаем класс "show-nav" (mixins.less)
    root.classList.toggle("show-nav");  
  });


  // --------------- Открытие popup формы -----------------------------------------

  // Находим элемент с идентификатором "js-eventPP"
  const eventPP = document.querySelector("#js-eventPP");

  if (eventPP) {  // Проверяем, существует ли элемент eventPP

  // ФУНКЦИЯ для закрытия всплывающего окна
  const closeEventPP = function (event) {
    function close() {
      // Удаляем обработчики событий
      document.removeEventListener("keyup", closeEventPP);
      eventPP.removeEventListener("click", closeEventPP);
      // Удаляем класс, чтобы скрыть всплывающее окно
      root.classList.remove("show-event-popup");
    }

    // Обработка различных типов событий
    switch (event.type) {
      case "keyup":
        // Закрываем окно при нажатии клавиши Escape
        if (event.key === "Escape" || event.keyCode === 27) {
          close(); // Вызов функции закрытия
          break;
        }
      case "click":
        // Закрываем окно, если кликнули на самом окне или на кнопке закрытия
        if (event.target === this || event.target.closest('.js-ppCloseBtn')) {
          close(); // Вызов функции закрытия
          break;
        }
    }
  }
  
    // Находим кнопку открытия события
    const eventOpenBtn = document.querySelector("#js-eventOpenBtn");  
    // Добавляем обработчик события "click" на кнопку открытия
    eventOpenBtn.addEventListener("click", function() {   
      // Показываем всплывающее окно
      root.classList.add("show-event-popup");
      // Добавляем обработчик события "keyup" для закрытия окна
      document.addEventListener("keyup", closeEventPP);
      // Добавляем обработчик события "click" на элемент eventPP
      eventPP.addEventListener("click", closeEventPP);
    });
  }

  // --------------- Слайдер мероприятий -----------------------------------------

  const swipers = document.querySelectorAll(".js-swiper");
  
  swipers.forEach(function (swpr) {
    new Swiper(swpr, {
      updateOnWindowResize: true, // обновление при изменении размера окна
      slidesPerView: "auto", // количество слайдов, отображаемых одновременно
      freeMode: true,  // свободный режим прокрутки
      spaceBetween: 0, // расстояние между слайдами
      speed: 500, // скорость перехода между слайдами
      grabCursor: true, // курсор "рука" при наведении
      pagination: {
        el: ".swiper-pagination", // элемент пагинации
        clickable: true // возможность клика по пагинации
      },
      navigation: {
        nextEl: ".swiper-arrow-next", // элемент для кнопки "Следующий"
        prevEl: ".swiper-arrow-prev", // элемент для кнопки "Предыдущий"
        disabledClass: "arrow--disabled" // класс для отключенных кнопок
      }
    });
  });

})();