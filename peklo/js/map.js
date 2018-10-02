ymaps.ready(init);
 
function init() {
    //Карта Санкт-Петербурга
    var myMap = new ymaps.Map("map", {
        center: [59.92161890945084,30.60358215039059],
        zoom: 10,
        controls: ['fullscreenControl']
    }, {
        searchControlProvider: 'yandex#search'
    });
    
    myMap.behaviors.disable('scrollZoom');
    
    // Адрес компании
    myAdress = new ymaps.Placemark([59.936512133370414,30.320009499999895], {
        balloonContentHeader: "Наша компания",
        balloonContentBody: "г. Санкт-Петербург, Невский проспект, ...",
        iconCaption: "Название компании"
    }, {
        preset: 'islands#greenDotIconWithCaption'
    }
    );
    myMap.geoObjects.add(myAdress);
    
    // Дополнительная метка
    myTag = new ymaps.Placemark([59.86115024056294,30.39376099999995], {
        balloonContentHeader: "Дополнительная метка",
        balloonContentBody: "г. Санкт-Петербург, проспект Славы, ...",
    }, {
        preset: 'islands#blueDotIconWithCaption'
    }
    );
    myMap.geoObjects.add(myTag);
}