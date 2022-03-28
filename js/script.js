console.log(`WARSZTAT - walidacja formularza zapisu do Newslettera`);

let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');
const validate = (event) => {

    event.preventDefault();

    console.log(`validate()`);
}

const allAgree = () => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');
    console.log(agree2);
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);