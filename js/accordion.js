export default function accordion() {
  const featureLink = document.querySelectorAll('.feature__link');
  const featureSub = document.querySelectorAll('.feature-sub');


  featureLink.forEach((item, i) => {
    item.addEventListener('click', () => {
      if(item.classList.contains('feature__link_active')) {
        item.classList.remove('feature__link_active');
        featureSub[i].classList.add('hidden');
      } else {
        featureSub.forEach(item => item.classList.add('hidden'));
        featureLink.forEach(item => item.classList.remove('feature__link_active'));

        featureSub[i].classList.remove('hidden');
        item.classList.add('feature__link_active');
      }
    })
  })
};