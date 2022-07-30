var btnOpen = document.getElementById('btn-open');
var modal = document.getElementById('wrapper-modal');

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
});

const closeModal = () => {
    modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);


