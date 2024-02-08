const root = document.querySelector('.map-container');
const mapWorked = root.querySelectorAll('div[data-franchise-map-type="worked"]');
const mapWaited = root.querySelectorAll('div[data-franchise-map-type="waited"]');
const btnContainer = root.querySelector('.section-map-top-right__franchise');
const [btnWorked, btnWaited] = btnContainer.querySelectorAll('span[data-franchise-map-change-type]');

btnContainer.addEventListener('click', (event) => {
    const type = event.target.getAttribute('data-franchise-map-change-type');
    if (!type) return;

    btnWorked.classList.remove('section-map-top-right__franchise-item--active');
    btnWaited.classList.remove('section-map-top-right__franchise-item--active');
    mapWorked.forEach(el => el.style.visibility = 'hidden');
    mapWaited.forEach(el => el.style.visibility = 'hidden');

    if (type === 'worked') {
        btnWorked.classList.add('section-map-top-right__franchise-item--active');
        mapWorked.forEach(el => el.style.visibility = 'visible');
    }

    if (type === 'waited') {
        btnWaited.classList.add('section-map-top-right__franchise-item--active');
        mapWaited.forEach(el => el.style.visibility = 'visible');
    }
})
