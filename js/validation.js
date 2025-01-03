const form = document.getElementById('ContactForm');
const nameInput = document.querySelector('input[name="SingleLine"]');
const emailInput = document.querySelector('input[name="Email"]');
const messageInput = document.querySelector('textarea[name="MultiLine"]');
const submitButton = document.querySelector('.zf-submitColor');

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateName() {
  let isValid = true;
  if (nameInput.value.trim() === '') {
    document.getElementById('SingleLine_error').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('SingleLine_error').style.display = 'none';
  }
  return isValid;
}

function validateEmailInput() {
  let isValid = true;
  if (!validateEmail(emailInput.value)) {
    document.getElementById('Email_error').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('Email_error').style.display = 'none';
  }
  return isValid;
}

function validateMessage() {
  let isValid = true;
  if (messageInput.value.trim() === '') {
    document.getElementById('MultiLine_error').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('MultiLine_error').style.display = 'none';
  }
  return isValid;
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmailInput); // Use renamed function
messageInput.addEventListener('input', validateMessage);