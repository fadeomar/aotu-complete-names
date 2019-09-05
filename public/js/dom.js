const searchInput = document.querySelector('.inputForm-inputField');

const listOption = document.querySelector('#listOption');

const randerNames = (data, status) => {
    console.log(status)
  if (status !== 200 && !data) {
    const head = document.querySelector('.head');
    const errorMessage = document.createElement('span');
    let message;
    switch (status) {
      case 404: message = 'xhr 404 Page Not Found';
        break;
      case 500: message = 'xhr 500 Server Error';
        break;
      default: message = 'xhr ERROR';
    }

    errorMessage.textContent = message;
    head.appendChild(errorMessage);
    return;
  }
  const convertedData = JSON.parse(data);

  listOption.textContent = '';
  convertedData.forEach((name) => {
    const option = document.createElement('option');
    option.setAttribute('value', name);
    listOption.appendChild(option);
  });
};

searchInput.addEventListener('input', (e) => {
  if (e.target.value.trim() !== '') {
    createXhr('/name', 'POST', e.target.value, randerNames);
  }
});