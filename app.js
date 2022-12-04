const review = document.querySelector('#customer-review');
const img = document.querySelector('img');
const customerName = document.querySelector('#customer-name');
const leftButton = document.querySelector('#left');

const customer = [
    {
        customerName: 'Ajdin',
        customerImg: '/images/ajdin.png',
        customerReview: 'Great site, very interactive!'
    },
    {
        customerName: 'John',
        customerImg: '/images/john.png',
        customerReview: "Good people, very helpful can't wait to finalize the buy!"
    },
    {
        customerName: 'Clara',
        customerImg: '/images/clara.png',
        customerReview: "The workers are very helpful and fast, the only problem I had was a minor one regarding the Android Auto but It's all good now."
    },
    {
        customerName: 'Mile',
        customerImg: '/images/mile.png',
        customerReview: "Bought my first BMW car today, coulnd't be happier. This is my daily drive :)"
    },
    {
        customerName: 'Jamie',
        customerImg: '/images/jamie.png',
        customerReview: "Poor reliability. My car broke down after 1 year of use and before that it had many problems with the infotainment system. NEVER AGAIN!!"
    },
    {
        customerName: 'Isaac',
        customerImg: '/images/isaac.png',
        customerReview: "Finally bought my dream car and I couldn't be happier about it. It's an BMW X3 2020!!!!"
    },
];


// shuffle customer reviews
const shuffleCustomers = () => {
    for (let i = customer.length -1; i > 0; i--){
        let randomPosition = Math.floor(Math.random() * (i + 1));
        let temp = customer[i];
        customer[i] = customer[randomPosition];
        customer[randomPosition]= temp;
    }
    return customer;
}


// event listener to print the reviews
leftButton.addEventListener('click', () => {
    const shuffledCustomers = shuffleCustomers();
    const randomCustomer = shuffledCustomers[Math.floor(Math.random()*shuffledCustomers.length)];
    console.log(randomCustomer);
    customerName.textContent = randomCustomer.customerName;
    review.textContent = randomCustomer.customerReview;
    img.src = randomCustomer.customerImg;
})