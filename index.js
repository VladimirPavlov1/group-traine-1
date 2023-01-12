console.log('hi')

const btnOpen=document.querySelector('.mobile-menu-btn');
const btnClose=document.querySelector('.mobile-menu__close');
const menuWrapper=document.querySelector('.mobile-nav__menu-wrapper')


btnOpen.addEventListener('click',onBtnOpenClick);
btnClose.addEventListener('click',onBtnCloseClick);

function onBtnOpenClick(){
    menuWrapper.classList.add('active')
}

function onBtnCloseClick(){
    menuWrapper.classList.remove('active')
}