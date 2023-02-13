const formRef = document.querySelector('form.login-form');


const onFormSubmit = e => {
  e.preventDefault();
  const email = e.currentTarget.elements.email;
  const password = e.currentTarget.elements.password;

  if (!(email.value &&  password.value)) {
    alert('Увага, всі поля повинні бути заповнен');
    return;
  }
  
  const result = {};
  result[email.name] = email.value;
  result[password.name] = password.value;
  console.log(result);
  e.currentTarget.reset();
};


formRef.addEventListener('submit', onFormSubmit);
