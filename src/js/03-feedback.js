import throttle from "lodash.throttle"; 

const formEl = document.querySelector('.feedback-form');

const emailEl = document.querySelector('input');

const messageEl = document.querySelector('textarea');
 
formEl.addEventListener('input', throttle(handleWriteReport, 500));
    
    const currentReport = {
    email: emailEl.value,
    message: messageEl.value
    };

function handleWriteReport() {localStorage.setItem("feedback-form-state", JSON.stringify(currentReport))};

// formEl.addEventListener('submit', handleDisplayReport);

// function handleDisplayReport(e) {
//   e.preventDefault();
//   const {
//     elements: { email, message }
//   } = e.target;
  

//   if (email.value === "" || message.value === "") {
//       alert('Attention! Fill in all fields before "Submit", please ;)');
//       return;
//     };

//     const formData = new FormData(e.target);
//     formData.forEach((value, textContent) => {
//         console.log(textContent, value);
//     });  
//   e.target.reset();
// }

