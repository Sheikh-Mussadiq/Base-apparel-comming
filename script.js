const form = document.getElementById('form');
const email = document.getElementById('email');
const errorIcon = document.getElementById('error-icon');
const errorText = document.getElementById('error-text');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
        errorIcon.classList.remove('hidden');
        errorText.classList.remove('hidden');
        alert('Please provide a valid email address');
    } else {
        errorIcon.classList.add('hidden');
        errorText.classList.add('hidden');
        alert('Thank you for subscribing!');
    }
});
