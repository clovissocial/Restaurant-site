
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    //validate that variables exist
    if(toggle && nav){
        //we add the show-menu class to the div tag with the nav__menu class
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //when we click on each nav__link, we remove the show-menu class
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
} 
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*========== CHANGE BACKGROUND HEADER ===========*/
function scrollHeader() {
    const nav = document.getElementById('header')
    //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.remove('scroll-header'); else nav.classList.add('scroll-header')
}

window.addEventListener('scroll', scrollHeader);

/*========== SHOW SCROLL TOP ===========*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop);

/*============ Dark Light Theme =============*/
const themeButton = document.getElementById('theme-button');
const darktheme = 'dark-theme';
const iconTheme = 'bx-sun';

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark':'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun';

//We validate if the user previously choosed a topic
if (selectedTheme){
    //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darktheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'] (iconTheme);
}

//Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove the dark theme / icon theme
    document.body.classList.toggle(darktheme);
    themeButton.classList.toggle(iconTheme );
   //We save the theme and the current icon that the user chose
   localStorage.setItem('selected-theme', getCurrentTheme());
   localStorage.setItem('selected-icon', getCurrentIcon());
})

/*========= SCROLL REVEAL ANIMATION ==========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img',
            .about__data, .about__img,
            .services__content, menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

 