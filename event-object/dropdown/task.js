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