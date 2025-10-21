const fullName = document.getElementById("fullName");
const fullNameError = document.getElementById("fullNameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const subject = document.getElementById("subject");
const subjectError = document.getElementById("subjectError");
const message = document.querySelector(".message__input");
const messageError = document.querySelector(".message__error");
const errors = document.querySelectorAll(".error__msg");
const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const successModal = document.querySelector("aside");
const submit = document.querySelector(".submitBtn");

let time = document.querySelector('[data-testid="test-user-time"]');
setInterval(() => {
  time.textContent = "Time (ms): " + Date.now();
}, 1000);

const hasNumber = (input) => {
  return /\d/.test(input.value);
};

const emptyName = () => {
  if (fullName.value.trim().length === 0) {
    fullNameError.style.display = "block";
    fullNameError.style.marginTop = "1rem";
  } else if (hasNumber(fullName)) {
    fullNameError.style.display = "block";
    fullNameError.textContent = "Must not contain any number";
  } else {
    fullNameError.style.display = "none";
    fullName.style.marginBottom = "1.5rem";
  }
  return;
};

const validateEmail = () => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.value.trim().match(mailformat)) {
    emailError.style.display = "block";
    emailError.style.marginTop = "1rem";
  } else {
    emailError.style.display = "none";
    email.style.marginBottom = "1.5rem";
  }
  return;
};

const validateSubject = () => {
  if (!subject.value.trim()) {
    subjectError.style.display = "block";
    subjectError.style.marginTop = "1rem";
  } else if (hasNumber(subject)) {
    subjectError.style.display = "block";
    subjectError.textContent = "Must not contain any number";
    subjectError.style.marginTop = "1rem";
  } else {
    subjectError.style.display = "none";
  }
};

const validateMessage = () => {
  if (!message.value.trim() || message.value.trim().length < 10) {
    messageError.style.display = "block";
    messageError.style.marginTop = "1rem";
    messageError.textContent = "Must contain at least 10 characters";
  } else {
    messageError.style.display = "none";
  }
};

submit.addEventListener("click", function (e) {
  let hasError = false;
  e.preventDefault();
  emptyName();
  validateEmail();
  validateSubject();
  validateMessage();

  errors.forEach((error) => {
    if (error.style.display === "block") {
      hasError = true;
    }
  });

  if (!hasError) {
    successModal.style.display = "block";
    setTimeout(function () {
      successModal.style.display = "none";
    }, 3000);
    inputs.forEach((input) => {
      input.value = "";
    });
    textArea.value = "";
  } else {
    successModal.style.display = "none";
  }
});
