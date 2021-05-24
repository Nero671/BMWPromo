const disabledScroll = () => {
  document.body.dataset.scrollY = window.scrollY;

  document.body.style.cssText = `
    position:fixed;
    top: -${window.scrollY}px;
    left: 0;
    width: 100%;
    overflow:hidden;
    height:100vh;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dataset.scrollY
  });
};  

export default {disabledScroll, enableScroll}