'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    //console.log(`a >>> : ` + window.scrollY);
    //console.log(`navbarHeight >>> : ${navbarHeight}`);

    if(window.scrollY > navbarHeight){
        navbar.classList.add(`navbar--dark`);
    }else{
        navbar.classList.remove(`navbar--dark`);
    }
});

// Handle Scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    // data-link="#home"
    // event.target : click이벤트가 발생한 target반환
    // .dataset >> data- 로 시작하는 속성을 의미
    // .link >> data-link이니까 link
    
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    //console.log(`link >>> : ${link}`);

    scrollIntoView(link);
})

// Handle Scrolling when tapping on the home__contact
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    //console.log(link);

    if(link == null){
        return;
    }
    
    scrollIntoView(link);
});

// Make home slowly fade to transparent as the window scrolls down.home__contact
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    //console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight
})

// Show 'arrow__up-btn' button when scrolling down
const upBtn = document.querySelector('.arrow__up-btn');
upBtn.addEventListener('click', (event) => {
    scrollIntoView('#home');
})
document.addEventListener('scroll', () => {

    if(window.scrollY > homeHeight * 0.5){
        upBtn.classList.add('visible');
    }else{
        upBtn.classList.remove('visible');
    }
})








// 추상함수의 개념
// 기존에 있던 함수지만, 우리가 새로 정의
function scrollIntoView(selection){
    const scrollTo = document.querySelector(selection);
    scrollTo.scrollIntoView({
        behavior: 'smooth'
    });
}

