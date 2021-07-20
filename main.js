/*===== menu show ====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== PRELOADER =======
var loader = document.getElementbyId("preloader");
wwindows.addEventListener("load" , function(){
   loader.style.display = "none";
}
)*/

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.text-center',{});
sr.reveal('.text-center-tag-line',{});
sr.reveal('.flip',{interval: 200}); 
sr.reveal('.front',{delay: 600});

/*SCROLL PROJECT*/
sr.reveal('.row', {});
sr.reveal('.blog_post', {});
sr.reveal('.blog_post_info', {});
sr.reveal('.blog_post_img',{interval: 300});

/*SCROLL SEE-MORE*/
sr.reveal('.see_section_txt', {});

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 
