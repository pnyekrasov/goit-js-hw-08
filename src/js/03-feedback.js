import throttle from "lodash.throttle"; 
const formEl = document.querySelector('.feedback-form');
const formData = {};
formEl.addEventListener('input', throttle(handleWriteReport, 500));
function handleWriteReport(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));  
    formEl.addEventListener('submit', handleDisplayReport);
    function handleDisplayReport(e) {
        const {
            elements: { email, message }
        } = formEl;        
        if (email.value === "" || message.value === "") {
            alert('Attention! Fill in all fields before "Submit", please ;)');
            return;
        };
        email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
        message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formEl.reset();
    };
};
