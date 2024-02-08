let modalMap = document.querySelector('.modal-map');
let btnMap = document.querySelector('.section14__catering');
let closeModal = document.querySelector('.modal-map-close');

if (!!modalMap) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3hnamp2Y3UiLCJhIjoiY2tpcHFkbGN4MXAzbjJ2cWp3YnB5eDg1eCJ9.k6eiifDFgJTBRDlEwbzy4w';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: {"lat": "59.939844", "lng": "30.309765"}, // starting position [lng, lat]
        zoom: 9, // starting zoom
        language: 'ru-RU',
        style: `mapbox://styles/mapbox/dark-v11`,
    });

    window.mapTest = map;

    btnMap.addEventListener('click', function () {
        modalMap.style.display = 'block';
        window.mapTest.resize();
    });
    closeModal.addEventListener('click', function () {
        modalMap.style.display = 'none';
    });
}