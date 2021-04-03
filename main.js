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

    navbarMenu.classList.remove('open');
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


// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.work__project');
// .work__projects는 여러개니까 자동으로 배열로 저장되나보네..

workBtnContainer.addEventListener('click', (event) => {
    // 타겟의 data-가 filter or 타겟의 부모노드의 data-가 filter 이면 변수 filter에 저장
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }
    //console.log(filter);
    
    // button클릭시 span으로 지정된 숫자를 누르게 되면 에러가 나니까 이를 수정하기위해 target을 재지정 해줬다.
    //const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;

    // Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    // active는 default로 설정되어있는 것
    active.classList.remove('selected');
    // 타겟이 눌리면 이 default의 selected를 제거하고,
    // 타겟에 selected 클래스를 추가해준다.
    event.target.classList.add('selected');
    event.target.parentNode.classList.add('selected');


    projectContainer.classList.add('anim-out');  
    /*
    setTimeout()으로 들어간 이유는 자바스크립트는 병렬처리라서
    anim-out라는 클래스를 추가 후 0.3초 이후에 프로젝트를 필터링하게 동작

    projects.forEach((project) => {
        console.log(project.dataset.type);

        if(filter ==='*' || filter === project.dataset.type){
            // filter가 *(all) or filter가 data-type과 일치하는경우
            // invisible이라는 클래스를 제거
            project.classList.remove('invisible');
        }else{
            // invisible이라는 클래스를 추가
            project.classList.add('invisible');
        }
    })
    
    forEach()와 동일
    1.
    for(let project of projects){}
    
    2. 
    let projects;
    for(let i=0; i<projects.length; i++){
        project = projects[i];
    }

    문법...
    */
    setTimeout(() => {
        projects.forEach((project) => {
            //console.log(project.dataset.type);
    
            if(filter ==='*' || filter === project.dataset.type){
                // filter가 *(all) or filter가 data-type과 일치하는경우
                // invisible이라는 클래스를 제거
                project.classList.remove('invisible');
            }else{
                // invisible이라는 클래스를 추가
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');
    }, 300);
})

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');;

console.log(navbarToggleBtn);
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})





// 추상함수의 개념
// 기존에 있던 함수지만, 우리가 새로 정의
function scrollIntoView(selection){
    const scrollTo = document.querySelector(selection);
    scrollTo.scrollIntoView({
        behavior: 'smooth'
    });
}

