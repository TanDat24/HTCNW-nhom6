const registrationForm = document.getElementById('registrationForm');
const emailInput = document.getElementById('emailDK');
const phoneInput = document.getElementById('sdt');
const passwordInput = document.getElementById('pwdDK');
const confirmPasswordInput = document.getElementById('rePass');
const registerButton = document.getElementById('DK');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const emailValid = document.getElementById('emailValid');
const phoneValid = document.getElementById('phoneValid');
const passwordValid = document.getElementById('passwordValid');
const confirmPasswordValid = document.getElementById('confirmPasswordValid');
const agreeCheckbox = document.getElementById('agree');

function validateEmail() {
    const email = emailInput.value.trim();
    if (!email.includes('@')) {
        emailError.style.display = 'block';
        emailValid.style.display = 'none';
        emailInput.classList.remove('valid');
        return false;
    } else {
        emailError.style.display = 'none';
        emailValid.style.display = 'block';
        emailInput.classList.add('valid');
        return true;
    }
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    if (!/^[0][0-9]{9}$/.test(phone)) {
        phoneError.style.display = 'block';
        phoneValid.style.display = 'none';
        phoneInput.classList.remove('valid');
        return false;
    } else {
        phoneError.style.display = 'none';
        phoneValid.style.display = 'block';
        phoneInput.classList.add('valid');
        return true;
    }
}

function validatePassword() {
    const password = passwordInput.value.trim();
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if (!isValidPassword) {
        passwordError.style.display = 'block';
        passwordValid.style.display = 'none';
        passwordInput.classList.remove('valid');
        return false;
    } else {
        passwordError.style.display = 'none';
        passwordValid.style.display = 'block';
        passwordInput.classList.add('valid');
        return true;
    }
}

function validateConfirmPassword() {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    if (confirmPassword === '') {
        confirmPasswordError.style.display = 'none';
        confirmPasswordValid.style.display = 'none';
        confirmPasswordInput.classList.remove('valid');
        return false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.style.display = 'block';
        confirmPasswordValid.style.display = 'none';
        confirmPasswordInput.classList.remove('valid');
        return false;
    } else {
        confirmPasswordError.style.display = 'none';
        confirmPasswordValid.style.display = 'block';
        confirmPasswordInput.classList.add('valid');
        return true;
    }
}


function validateForm() {
    return validateEmail() && validatePhone() && validatePassword() && validateConfirmPassword() && agreeCheckbox.checked;
}

registrationForm.addEventListener('input', function () {
    registerButton.disabled = !validateForm();
});

emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Đăng ký thành công!');
        registrationForm.reset();
        registerButton.disabled = true;
    }
});