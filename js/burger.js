export default function burger() {
  const menu = document.querySelector('.menu');
  const humburgerMenu = document.querySelector('.humburger-menu');

  const toggleMenu = () => {
    menu.classList.toggle('menu-active');
    humburgerMenu.classList.toggle('humburger-menu-active');
  }

  const closeMenu = () => {
    menu.classList.remove('menu-active');
    humburgerMenu.classList.remove('humburger-menu-active');
  }

  humburgerMenu.addEventListener('click', toggleMenu);

  menu.addEventListener('click', e => {
    const target = e.target;

    if(target.closest('.menu-list__item')) {
      closeMenu();
    }
  })
}


