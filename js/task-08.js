const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements;
  const mailUser = formElements.email.value;
  const passwordUser = formElements.password.value;
  if (mailUser !== "" && passwordUser !== "") {
    console.log({ mailUser, passwordUser });
    formEl.reset();
    return;
  }
  alert("Всі поля повинні бути заповнені");
}
