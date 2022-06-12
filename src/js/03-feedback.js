import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form")
const {email, message} = feedbackForm

const STORAGE_KEY = "feedback-form-state";

restoreForm()

feedbackForm.addEventListener("input", throttle(onInputForm, 500))
feedbackForm.addEventListener("submit", onSubmitForm )

function onInputForm() {
  
    // Повторення коду, не можу додуматись як його позбутись
    const feedback = {
        email: email.value,
        message: message.value
    }
    
    // collectedObject()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}

function onSubmitForm(event) {
  event.preventDefault()

      if (email.value === "" || message.value === "") {
    return alert("Всі поля повинні бути заповнені!");
      }
  
    // Повторення коду, не можу додуматись як його позбутись
  const feedback = {
    email: email.value,
    message: message.value
  }

    // collectedObject()
  console.log(feedback)
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function restoreForm() {
  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedForm) {
        email.value = savedForm.email
        message.value = savedForm.message
    }
}

// function collectedObject() {
//       const feedback = {
//             email: email.value,
//             message: message.value
//       }
//     return feedback
// }

