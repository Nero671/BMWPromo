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



const formHandler = (form) => {
  const smallElem = document.createElement('small');
  form.append(smallElem);

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = {};
    let flag = true;

    const buttonSubmit = form.querySelector('.button[type="submit"]')

    for(const elem of form.elements) {
      const {name, value} = elem;
      if(name) {
        if(value.trim()) {
          elem.style.border = '';
          data[name] = value;
        } else {
          elem.style.border = '1px solid red';
          flag = false;
          elem.value = '';
        }
        
      } 
    }

    if(!flag) {
      return smallElem.textContent = 'Заполните все поля!';
    }

    
    
    sendData(JSON.stringify(data), 
    (id) => 
      {
        smallElem.innerHTML = 'Ваша заявка №' + id + '! <br> В ближайшее время с вами свяжемся!';
        smallElem.style.color = 'green';
        buttonSubmit.disabled = true;

        setTimeout(() => {
          smallElem.textContent = '';
          buttonSubmit.disabled = false;
        }, 5000);
      }, 
    (err) => 
      {
        small.innerHTML = 'К сожалению сервер временно недоступен :( <br> Попробуйте отправить заявку позже.';
        smallElem.style.color = 'red';
      }
    );

    form.reset();
  })
}

export default function sendForm() {
  const form = document.querySelectorAll('.form');
  form.forEach(formHandler);
}


