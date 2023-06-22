import throttle from "lodash.throttle"; 
const formEl = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

formEl.addEventListener('input', throttle(handleWriteReport, 500));
function handleWriteReport(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}; 

    const {
            elements: { email, message }
    } = formEl;
    const saveData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (saveData) {
    email.value = saveData.email || '';
    message.value = saveData.message || '';  
    }
;

    formEl.addEventListener('submit', handleDisplayReport);
    function handleDisplayReport(e) {
               
        if (formEl.email.value === "" || formEl.message.value === "") {
            alert('Attention! Fill in all fields before "Submit", please ;)');
            return;
        };
       
        localStorage.removeItem("feedback-form-state");
        console.log(formData);        
        formEl.reset();
        formData = {};
    };

