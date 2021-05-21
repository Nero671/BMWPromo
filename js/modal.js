const more = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');


const openModal = () => {
  modal.classList.remove('hidden');
  disabledScroll();
}

const closeModal = () => {
  modal.classList.add('hidden');
  enableScroll();
}

more.forEach(item => {
  item.addEventListener('click', openModal);
})

modal.addEventListener('click', e => {
  const target = e.target;

  if(target.classList.contains('overlay') || target.closest('.modal__close')) {
    closeModal();
  }
})