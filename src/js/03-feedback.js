const formEl = document.querySelector('.feedback-form');
console.log(formEl);
const dataDisplayEl = {`email: ${ formEl.email.value },
    message: ${ formEl.message.value }`,
};
console.log(dataDisplayEl);

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

