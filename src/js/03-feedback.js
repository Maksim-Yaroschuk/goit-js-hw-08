import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form")

const STORAGE_KEY = "feedback-form-state";

restoreForm()

feedbackForm.addEventListener("input", throttle(onInputForm, 500))

function onInputForm(event) {
     const {
        elements: { email, message }
    } = event.currentTarget 

  const feedback = {
    email: email.value,
    message: message.value
  }

    console.log(feedback)
localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}


function restoreForm() {
  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedForm) {
        console.log("запонюється форма")
    feedbackForm.email.value = savedForm.email
    feedbackForm.message.value = savedForm.message
    }


    
//     console.log(savedForm.email)
//     console.log(savedForm.message)
// console.log(feedbackForm.email.value)
}



feedbackForm.addEventListener("submit", onCollectFeedback )

function onCollectFeedback(event) {
  event.preventDefault()
  
  const {
        elements: { email, message }
    } = event.currentTarget

      if (email.value === "" || message.value === "") {
    return alert("Всі поля повинні бути заповнені!");
      }
  
  const feedback = {
    email: email.value,
    message: message.value
  }

  console.log(feedback)
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}


