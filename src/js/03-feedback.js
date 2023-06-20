import throttle from "lodash.throttle"; 

const formEl = document.querySelector('.feedback-form');

// const emailEl = document.querySelector('input');

// const messageEl = document.querySelector('textarea');
 
formEl.addEventListener('input', throttle(handleWriteReport, 500));


function handleWriteReport(e) {
    e.preventDefault();
    const {
        elements: { email, message }
    } = e.currentTarget;

    const currentReport = {
        email: email.value,
        message: message.value
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(currentReport))

    formEl.addEventListener('submit', handleDisplayReport);

    function handleDisplayReport(e) {
        if (email.value === "" || message.value === "") {
            alert('Attention! Fill in all fields before "Submit", please ;)');
            return;
        };
        console.log(localStorage.getItem("feedback-form-state"))
    };
};


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

