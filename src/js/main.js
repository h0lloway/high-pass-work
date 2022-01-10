// yakornie linki 

$(function () {
  $('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1200);
    return false;
  });
});

// burger menu

$(document).ready(function () {
  $('.bottom__burger').click(function (event) {
    $('.bottom__burger,.bottom__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

// yandex map

ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.76946, 37.63844],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  const myPlacemark = new ymaps.Placemark(
    [55.76946, 37.63844],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/location.png",
      iconImageSize: [20, 20],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}

// map window

document.querySelector('.contacts__map').addEventListener('click', function (event) {
  document.querySelector('.contacts__address').classList.add('address--active');
});

document.querySelector('.close-btn').addEventListener('click', function (event) {
  document.querySelector('.contacts__address').classList.remove('address--active');
});


// search

document.querySelector(".header__form-btn-open").addEventListener("click", function () {
  document.querySelector(".header__form").classList.add("header__form--active");
  document.querySelector(".header__form-btn-submit").classList.add("block");
  this.classList.add("btn--active");
})

document.querySelector(".header__form-btn-close").addEventListener("click", function () {
  document.querySelector(".header__form").classList.remove("header__form--active");
  document.querySelector(".header__form-btn-submit").classList.remove("block");
  document.querySelector(".header__form-btn-open").classList.remove("btn--active");
})

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".header__form-container")) {
    form.classList.remove("header__form--active");
    form.querySelector(".header__form-input").value = "";
    document.querySelector(".header__form-btn-open").classList.remove("btn--active")
    document.querySelector(".header__form-btn-submit").classList.remove("block")
  }
})

