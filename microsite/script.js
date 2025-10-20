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





//shop
const shop = document.getElementById('shop');
let entrprajsAmount = 0;
let bejzikAmount = 0;
let premiumAmount = 0;
let profiAmount = 0;
//their sum
let sum = entrprajsAmount + bejzikAmount + premiumAmount + profiAmount;
function updateCart() {
    const sum = entrprajsAmount + bejzikAmount + premiumAmount + profiAmount;
    cartBtn.textContent = 'Košík (' + sum + ')';
    shop.style.display = sum > 0 ? 'block' : 'none';
}


if (sum > 0) {
    shop.style.display = 'block';
}
else {
    shop.style.display = 'none';
}

//each product logic
const enterpriseBtn = document.getElementById('entrprajs');
const bejzikBtn = document.getElementById('bejzik');
const premiumBtn = document.getElementById('premium');
const profiBtn = document.getElementById('profi');
const cartBtn = document.getElementById('cartBtn');

cartBtn.addEventListener('click', () => {
    if (sum > 0) {
        const target = document.getElementById('shop');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});

enterpriseBtn.addEventListener('click', () => {
    entrprajsAmount++;
    shop.style.display = 'block';
    updateCart();
});
bejzikBtn.addEventListener('click', () => {
    bejzikAmount++;
    shop.style.display = 'block';
    updateCart();
});
premiumBtn.addEventListener('click', () => {
    premiumAmount++;
    shop.style.display = 'block';
    updateCart();
});
profiBtn.addEventListener('click', () => {
    profiAmount++;
    shop.style.display = 'block';
    updateCart();
});