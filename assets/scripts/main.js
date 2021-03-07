function validation() {
    const form = document.querySelector('#form');
    const email = document.querySelector('#email').value;
    var validationText = document.querySelector('.validation-text');
    const submitButton = document.querySelector('.submit');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)) {
        form.classList.add('valid');
        form.classList.remove('invalid');
        validationText.innerHTML = "Valid Email Address"
        validationText.style.color = '#00ff00';
        submitButton.style.display = 'block';
    }
    else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        validationText.innerHTML = "Invalid Email Address"
        validationText.style.color = '#ff0000';
        submitButton.style.display = 'none';
    }

    if(email == "") {
        form.classList.remove('valid');
        form.classList.remove('invalid');
        validationText.innerHTML = ""
        validationText.style.color = '#00ff00';
        submitButton.style.display = 'none';
    }
}