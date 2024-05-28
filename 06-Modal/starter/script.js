'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// open modal function
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// close modal function
const closeModal = function () {
  console.log('Modal closed');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// show the modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// close the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// handle 'esc' keypress event
document.addEventListener('keydown', function (e) {
  console.log(e.key + ' was pressed');

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
