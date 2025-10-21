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
    entrprajsKosik.textContent = entrprajsAmount;
    bejzikKosik.textContent = bejzikAmount;
    premiumKosik.textContent = premiumAmount;
    profiKosik.textContent = profiAmount;
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
//kosikovy veci
const entrprajsKosik = document.getElementById('entrprajsKosik');
const bejzikKosik = document.getElementById('bejzikKosik');
const premiumKosik = document.getElementById('premiumKosik');
const profiKosik = document.getElementById('profiKosik');
//pridávání/odebíraní - tlačítka
const addEntrprajsBtn = document.getElementById('0');
const removeEntrprajsBtn = document.getElementById('1');
const addBejzikBtn = document.getElementById('2');
const removeBejzikBtn = document.getElementById('3');
const addPremiumBtn = document.getElementById('4');
const removePremiumBtn = document.getElementById('5');
const addProfiBtn = document.getElementById('6');
const removeProfiBtn = document.getElementById('7');
const deleteAllBtn = document.getElementById('deleteAllBtn');

//do we really have to add listener to each button? apparently yes
deleteAllBtn.addEventListener('click', () => {
    entrprajsAmount = 0;
    bejzikAmount = 0;
    premiumAmount = 0;
    profiAmount = 0;
    updateCart();
});
addEntrprajsBtn.addEventListener('click', () => {
    entrprajsAmount++;
    shop.style.display = 'block';
    updateCart();
});
removeEntrprajsBtn.addEventListener('click', () => {
    if (entrprajsAmount > 0) {
        entrprajsAmount--;
        updateCart();
    }
});
addBejzikBtn.addEventListener('click', () => {
    bejzikAmount++;
    shop.style.display = 'block';
    updateCart();
});
removeBejzikBtn.addEventListener('click', () => {
    if (bejzikAmount > 0) {
        bejzikAmount--;
        updateCart();
    }
});
addPremiumBtn.addEventListener('click', () => {
    premiumAmount++;
    shop.style.display = 'block';
    updateCart();
});
removePremiumBtn.addEventListener('click', () => {
    if (premiumAmount > 0) {
        premiumAmount--;
        updateCart();
    }
});
addProfiBtn.addEventListener('click', () => {
    profiAmount++;
    shop.style.display = 'block';
    updateCart();
});
removeProfiBtn.addEventListener('click', () => {
    if (profiAmount > 0) {
        profiAmount--;
        updateCart();
    }
});

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