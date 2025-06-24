(function() {
  "use strict";

  const root = document.documentElement;  // Получаем корневой элемент документа (обычно это <html>)

  // --------------- Изменяем навигационную панель для < 1020px ------------------

  // Находим элемент навигации с id "js-navToggle"
  const navToggle = document.querySelector("#js-navToggle")  

  // Добавляем обработчик события "click" на элемент navToggle
  navToggle.addEventListener("click", function() {  
    // Переключаем класс "show-nav" (mixins.less)
    root.classList.toggle("show-nav");  
  });


  // --------------- Открытие popup формы ----------------------------------------

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
      console.log(event.type);
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

  // --------------- Googl карта -------------------------------------------------

  const contactsMap = document.querySelector("#js-contactsMap");
  
  if (contactsMap) {
    const mapStyles = [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#242f3e"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#746855"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#242f3e"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563"
          }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#263c3f"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#6b9a76"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#38414e"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#212a37"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9ca5b3"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#746855"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#1f2835"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#f3d19c"
          }
        ]
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#2f3948"
          }
        ]
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#d59563"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#17263c"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#515c6d"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#17263c"
          }
        ]
      }
    ];

    const mapCenter = new google.maps.LatLng(56.49387, 84.96274);
    const mapOptions = {
      center: mapCenter,
      disableDefaultUI: true,
      draggable: true,
      gestureHandling: "cooperative",
      scrollwheel: false,
      styles: mapStyles,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      }
    };
    const map = new google.maps.Map(contactsMap, mapOptions);

    const point = new google.maps.LatLng(56.49385, 84.96274);
    const mapPin = new google.maps.MarkerImage(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABHCAMAAABf/MtLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAADAUExURUdwTK8wILwyJL0zI70yJbwyI79AIL0yJL8wILs0JLw0JLsyJL0zJbwyJbwzJB8eHv///3Nycjs6OldWVsRMP4+OjsRNP8fHx+Pj492ZkUlISOazrauqqu7MyMfGxsBAMS0sLMlZTc1mW/vy8sBAMvvy8WVkZMVMQPbl48lZTtmMg81mWtmMhMxmW4+Pj/fm4/fl5OGmnvHx8Z2cnMVNQPLZ1tWAdt6ZktBzaHNzc9V/duq/u+Gmn8hZTNFzabm5uYZR+N4AAAAOdFJOUwAQz9/f3xB/EIDPz9/ftWbT5QAAAWxJREFUWMPt1VlTwjAQAGDEaluPJiQhYGjtAeUQxPu+/v+/cpO2DC+OI7PRYcw+JOlO55vMdpO2WmtBNo3W9+FsZzvb2c529l/Y45hXi/iG6yA8fuKMkGUMqS5X1RvLONvA7tJOtaD9au5AginSo5A6hUem3+hRhmUTwhubjNFttbKzDwT7GqqtGpv0G5vE2Ptes9FrsvqW/9FmXDGIjHCuZwYJc0wUHCn9aYlJKO7uKmf/sh39LJxtxx7lObJ9e1emMA1oISN5OUmFmNMrIQSGnd/TM2M/w3iRwCDpCdK+i9EwMfY5jMkU056l0SvNtf0GT0PUfT9K+a6tAYUKP0wFpl3oSpTansuXchIh2jM9LKDWet/SlATNLkxjg2lqsjAtg9cnOqCbU1Ev9Ji6+wTTdv/LLbJdbHnsh160GwZW6ANz+Ns28LC+WXwL9lFt71mwv7gSUcKzuG/fYr2DtqEPd2w0YeAfR55vg/4EpN3f8dlAXnoAAAAASUVORK5CYII=",
      new google.maps.Size(91, 71), //size
      new google.maps.Point(0, 0),  //origin point
      new google.maps.Point(0, 71)  //offset point
    );
    new google.maps.Marker({
      position: point,
      map: map,
      icon: mapPin,
      title: "TAGREE digital"
    });
  }

   // --------------- jQuery для popup visitors ----------------------------------

  const jsSelectric = $(".js-selectric");  // Инициализацию для плагина
  console.log(jsSelectric);

  if (jsSelectric.length) {
    jsSelectric.selectric({
      nativeOnMobile: false
    });
  }

  // --------------- jQuery для popup contacts (mask-phone) ----------------------

  const mobileMask = $('.js-mobileMask');

  if (mobileMask.length) {
    mobileMask.mask('+7 (000) 000 00 00', { placeholder: "+7 (___) ___ __ __" });
  }

  // --------------- jQuery для popup календарь----------------------

  const dateField = $(".js-dateField");
  
  if (dateField.length) {
    const pickerInit = function (pick) {
      const dateInput = pick.find(".js-dateInput");
      const dateDay = pick.find(".js-dateDay");
      const dateMonth = pick.find(".js-dateMonth");
      const dateYear = pick.find(".js-dateYear");
      const dateConfig = {
        autoClose: true,
        minDate: new Date(),
        navTitles: {
          days: "MMMM <i>yyyy</i>"
        },
        onSelect: function ({ date }) {
          dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
          dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
          dateYear.val(date ? date.getFullYear() : "");
        }
      };
      new AirDatepicker(dateInput[0], dateConfig);
    };
    $.each(dateField, function (i) {
      pickerInit($(this));
    });
  }

  // --------------- jQuery валидатор----------------------

  const eventForm = $('#js-eventForm');
  if (eventForm.length) {
  eventForm.validate({
    errorElement: "span"
    });
  }

  const footer_email = $('#js-footer_email');
  if (footer_email.length) {
    const subscribeAction = footer_email.attr("action");
    const subscribeEmail = footer_email.find("#js-subscribeEmail");
    footer_email.validate({
      errorElement: "span",
      errorPlacement: function(error, element) {
            if (element.attr("name") === "email") {
                // Добавляем сообщение об ошибке под полем email
                error.appendTo('.email-error-message');
            } else if (element.attr("name") === "agree") {
                // Добавляем сообщение об ошибке под чекбоксом
                error.appendTo('.check-error-message');
            }
        },
       // --------------- jQuery AJAX-запрос форма подписки (footer)
      submitHandler: function (form, event) {
        event.preventDefault();
        $.ajax({
          url: subscribeAction,
          method: "POST",
          data: {
            email: subscribeEmail.val()
          },
          success: function () {
            subscribeEmail.val("");
            subscribeEmail.blur();
            alert("Вы успешно подписались на рассылку новостей");
          },
          error: function () {
            alert("Что-то пошло не так, попробуйте еще раз");
          }
        });
      }
    });
  }

  // --------------- jQuery AJAX-запрос форма подписки (footer)----------------------



})();

// toastr.options = {
//   "closeButton": true,
//   "debug": false,
//   "newestOnTop": false,
//   "progressBar": false,
//   "positionClass": "toast-top-full-width",
//   "preventDuplicates": false,
//   "onclick": null,
//   "showDuration": "3000",
//   "hideDuration": "1000",
//   "timeOut": "5000",
//   "extendedTimeOut": "1000",
//   "showEasing": "swing",
//   "hideEasing": "linear",
//   "showMethod": "fadeIn",
//   "hideMethod": "fadeOut"
// }