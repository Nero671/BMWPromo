const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smoothScrollElems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();

    const id = item.getAttribute('href').substring('1');
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
  })
})