
// getting all ids from html
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const message = document.getElementById('message');

const form = document.getElementById('form');
// array with all fields
const fieldsToValidate = [name, email, age, message];

// Register listeners if user is changing the answers to the questions
for (field of fieldsToValidate) {
    field.addEventListener('change', (e) => {
        const changedField = e.target;
        clearFieldState(changedField);
    });
} 

// what happens when you send the form, checks if all imputs are successful
form.addEventListener('submit', e => {
    const isSuccessful = checkInputs();
    if (!isSuccessful) {
        e.preventDefault();
    }
});

// checking inputs if they are a success or error and displaying message
function checkInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const messageValue = message.value.trim();

    let isSuccessful = true;
    if(isNameValid(nameValue)) {
        setSuccessFor(name);
    } else {
        isSuccessful = false;
        setErrorFor(name, 'Name cannot be less that 2 charachters');
    }

    if(isEmailValid(emailValue)) {
        setSuccessFor(email);
    } else {
        isSuccessful = false;
        setErrorFor(email, 'Email is not valid');
    }

    if(isAgeValid(ageValue)) {
        setSuccessFor(age);
    } else {
        isSuccessful = false;
        setErrorFor(age, 'You must be 18 or over to send this contact form');
    }

    if(isMessageValid(messageValue)) {
        setSuccessFor(message);
    } else {
        isSuccessful = false;
        setErrorFor(message, 'Message must be between 10 and 200 characters');
    }

    return isSuccessful;
}


// placing text and red frame for error
function setErrorFor(input, errorMessage) {
    const formDiv = input.parentElement;
    const errorField = formDiv.querySelector('small');
    errorField.innerText = errorMessage;
    // reaching the class in css
    formDiv.className = 'form-div error';
}

// if user is changing error field the frame will reset to gray
function clearFieldState(field) {
    const formDiv = field.parentElement;
    const errorField = formDiv.querySelector('small');
    errorField.innerText = '';
    formDiv.className = 'form-div';
}

// placing green frame for success
function setSuccessFor(input) {
    const formDiv = input.parentElement;
    formDiv.className = 'form-div success';
}

// functions - custom validations to each element
const isNameValid = nameValue => nameValue.length > 1;
const isAgeValid = ageValue => ageValue >= 18;
const isMessageValid = messageValue => messageValue.length >= 10 && messageValue.length <= 200;

// checking if eamil is valid
function isEmailValid(email) {
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
}
