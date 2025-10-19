//newsletter sign-up button 
const input = document.getElementById('newsletter');
const signUpBtn = document.getElementById('signUpBtn');

signUpBtn.addEventListener('click', () => {
    input.value = '';
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        input.value = '';
    }
});

//popup for signup/signim
const popup = document.getElementById('signUp');
const openBtn = document.getElementById('signUpBtn');
const closeBtn = document.getElementById('closeSignUp');

//makes it hidden from start
popup.style.display = 'none';

signUpBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
