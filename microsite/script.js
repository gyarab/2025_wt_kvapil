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