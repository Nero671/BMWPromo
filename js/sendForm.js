const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callback, falseCallback) => {
  const request = new XMLHttpRequest();

  request.open('POST', server);
  request.addEventListener('readystatechange', () => {
    const response = JSON.parse(request.responseText)
    if(request.readyState !== 4) return;
    if(request.status === 200 || request.status === 201) {
      callback(response.id);
    } else {
      falseCallback(request.status)
      throw new Error(request.status);
    }
  })

  request.send(data); 
};

const form = document.querySelectorAll('.form');

const formHandler = (form) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = {};

    for(const {name, value, phone} of form.elements) {
      if(name) {
        data[name] = value;
      } 
    }

    const smallElem = document.createElement('small');
    
    sendData(JSON.stringify(data), 
    (id) => 
      {
        smallElem.innerHTML = 'Ваша заявка №' + id + '! <br> В ближайшее время с вами свяжемся!';
        smallElem.style.color = 'green';
        form.append(smallElem);
      }, 
    (err) => 
      {
        small.innerHTML = 'К сожалению сервер временно недоступен :( <br> Попробуйте отправить заявку позже.';
        smallElem.style.color = 'red';
        form.append(smallElem);
      }
    );

    form.reset();
  })
}

form.forEach(formHandler);

