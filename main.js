var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: "#next",
        prevEl: "#prev",
    },
});


const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn'); 

cartIcon.addEventListener('click',()=> cartTab.classList.add('cart-tab-active'));
closeBtn.addEventListener('click',()=> cartTab.classList.remove('cart-tab-active'));

let productList =[];

const showCards = () => {
    productList.forEach(product => {
        const orderCard = document.createElement('div')
    }

    )}

const initApp = () =>{
    fetch('products.json').then
    (Response => Response.json()).then
    (data =>{
        productList = data;
        showCards();
    })
}

initApp();