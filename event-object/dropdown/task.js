let dropdown = Array.from(document.getElementsByClassName('dropdown__value'));
let dropdownLink = Array.from(document.getElementsByClassName('dropdown__link'));

dropdown.forEach(e => {
    e.addEventListener('click', function() {
        e.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
    });
});

dropdownLink.forEach(e => {
    e.addEventListener('click', function(event) {
        e.closest('.dropdown').querySelector('.dropdown__value').textContent = e.textContent;
        e.closest('.dropdown__list').classList.remove('dropdown__list_active');
        event.preventDefault();
    });
});

/*let body = document.querySelector('body');

body.addEventListener('click', function(event) {
    if (event.target.closest('.dropdown') == null) return false;
    event.target.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
    event.target.closest('.dropdown').querySelector('.dropdown__value').textContent = event.target.textContent;
    if (event.target.closest('.dropdown__list') != null) event.target.closest('.dropdown__list').classList.remove('dropdown__list_active');
    event.preventDefault();
});*/