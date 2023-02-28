import {loadAnimation} from 'lottie-web/build/player/lottie_light';

import heroJson from 'url:./lottie/hero.data';


function openModal() {
  document.getElementById('modal').classList.add('opened');
  document.querySelector('.modal-dialog').classList.add('opened');
}

function updateModalMessage(message) {
  const modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
}

function submitContactForm() {
  const form = document.getElementById('formulario-contacto');
  form.classList.add('validated');

  if ( !form.checkValidity() ) {
    return false;
  }

  if (grecaptcha && grecaptcha.getResponse().length == 0) {
    updateModalMessage('Por favor complete la casilla de verificación "No soy un robot".');
    openModal();
    return false;
  }

  const formData = new FormData(form);

  const submitEndpoint = 'http://localhost:8081';
  return fetch(submitEndpoint, {
    body: new URLSearchParams(formData),
    method: 'post'
  })
    .then(response => {
      updateModalMessage('Su mensaje ha sido enviado correctamente, lo contactaremos a la brevedad.');
      openModal();
    })
    .catch(response => {
      updateModalMessage('Hubo error al enviar el mensaje, por favor intente comunicarse por otro media. Gracias.');
      openModal();
    });
}

function updateBudgetText(event) {
  const budgetInput = event.target;
  const budgetText = document.getElementById('budget_text');
  budgetText.textContent = `$${budgetInput.value}`;
}

function setFilledClass(event) {
  const inputEl = event.target;
  if (inputEl.value != '') {
    inputEl.classList.add('filled');
  } else {
    inputEl.classList.remove('filled');
  }
}

function closeModal() {
  document.getElementById('modal').classList.remove('opened');
}

document.addEventListener("DOMContentLoaded", (event) => {

  loadAnimation({
    container: document.querySelector('.hero'),
    loop: true,
    autoplay: true,
    path: heroJson,
  });

  document
    .getElementById('btn-enviar')
    .addEventListener('click', submitContactForm);

  document
    .getElementById('budget')
    .addEventListener('change', updateBudgetText);


  document
    .querySelector('.modal-dialog .close')
    .addEventListener('click', closeModal);


  document
    .getElementById('modal-ok')
    .addEventListener('click', closeModal);


  document
    .querySelectorAll('.input-group input')
    .forEach(item => {
      item.addEventListener('change', setFilledClass);
    });
});
