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
    console.log(`link >>> : ${link}`);
    const scrollTo = document.querySelector(link);
    
    scrollTo.scrollIntoView({
        behavior: 'smooth'
    });
})