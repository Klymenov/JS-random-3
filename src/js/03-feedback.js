import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const emailRef = document.querySelector('.feedback-form input');


formRef.addEventListener('input', throttle(onText, 500));
formRef.addEventListener('submit', onFormSubmit);
 
checkFormValue()   

function onText(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));  
}  
  
function checkFormValue() {
    const formtext = localStorage.getItem('STORAGE_KEY');
    const saveMassages = JSON.parse(formtext);
  if (saveMassages) { 
    emailRef.value = saveMassages.email || "";
    textareaRef.value = saveMassages.message || "";
    }

   }   

function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset(); 
   
    localStorage.removeItem('STORAGE_KEY');
    console.dir(`E-mail: ${formData.email}, Message: ${formData.message}`);
   
}