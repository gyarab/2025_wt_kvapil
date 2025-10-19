//newsletter sign-up button 
const input = document.getElementById('newsletter');
const newsletterBtn = document.getElementById('newsletter-btn');

newsletterBtn.addEventListener('click', () => {
    input.value = '';
});

signInBtn.addEventListener('click', () => {
    input.value = '';
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        input.value = '';
    }
});



//popup for signup/signim
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const popup = document.getElementById('signUp');
const signUpBtn = document.getElementById('signUpBtn');
const logInBt = document.getElementById('signInBtn');
const closeBtn = document.getElementById('closeSignUp');
const useBtn = document.getElementById('logIn');
const nadpis = document.querySelector('uvod');

//makes it hidden from start
popup.style.display = 'none';

signUpBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
    uvod.style.display = 'none';
});

signInBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
        uvod.style.display = 'none';
});

useBtn.addEventListener('click', () => {
    emailInput.value = '';
    passwordInput.value = '';
    popup.style.display = 'none';
        uvod.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
        uvod.style.display = 'block';
});
