(()=>{var __webpack_modules__={"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/()=>{eval('// burger menu\n$(document).ready(function () {\n  $(\'.bottom__burger\').click(function (event) {\n    $(\'.bottom__burger,.bottom__nav\').toggleClass(\'active\');\n    $(\'body\').toggleClass(\'lock\');\n  });\n}); // yandex map\n\nymaps.ready(init);\n\nfunction init() {\n  var mapElem = document.querySelector(\'#map\');\n  var myMap = new ymaps.Map("map", {\n    center: [55.75846306898368, 37.601079499999905],\n    zoom: 14,\n    controls: [\'geolocationControl\', \'zoomControl\']\n  }, {\n    suppressMapOpenBlock: true,\n    geolocationControlSize: "large",\n    geolocationControlPosition: {\n      top: "200px",\n      right: "20px"\n    },\n    geolocationControlFloat: \'none\',\n    zoomControlSize: "small",\n    zoomControlFloat: "none",\n    zoomControlPosition: {\n      top: "120px",\n      right: "20px"\n    }\n  });\n  var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {\n    iconLayout: "default#image",\n    iconImageHref: "img/location.svg",\n    iconImageSize: [20, 20],\n    iconImageOffset: [-20, -40]\n  });\n  myMap.geoObjects.add(myPlacemark);\n  setTimeout(function () {\n    myMap.container.fitToViewport();\n  }, 5000);\n}\n\n//# sourceURL=webpack://gulp4max/./src/js/main.js?')}},__webpack_exports__={};__webpack_modules__["./src/js/main.js"]()})();
//# sourceMappingURL=main.js.map
