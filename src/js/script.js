const form = document.getElementById('form')
const firstName = document.getElementById('name')
const lastName = document.getElementById('last-name')
const mail = document.getElementById('mail')
const pwd = document.getElementById('pwd')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs()
})

function checkInputs() {
  const nameValue = firstName.value;
  const lastNameValue = lastName.value;
  const mailValue = mail.value;
  const pwdValue = pwd.value;

  if (nameValue === '') {
    setErrorFor(firstName, 'First Name is required.')
  } else {
    setSuccessFor(firstName)
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last name is required.')
  } else {
    setSuccessFor(lastName)
  }

  if (mailValue === '') {
    setErrorFor(mail, 'Email is required.')
  } else if (!checkEmail(mailValue)) {
    setErrorFor(mail, 'Please, enter a valid email.')
  } else {
    setSuccessFor(mail)
  }

  if (pwdValue === '') {
    setErrorFor(pwd, 'Password is required.')
  } else if (pwdValue.length < 7) {
    setErrorFor(pwd, 'Password must be more than 7 characters.')
  } else {
    setSuccessFor(pwd)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')
  small.innerText = message;
  formControl.className = "form-control error"
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(mail) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    mail
  );
}