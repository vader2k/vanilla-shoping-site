'use strict'

//modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]')

//modal functions
const modalCloseFn = () => {
    modal.classList.add('closed')
}

//modal event listener
modalCloseOverlay.addEventListener('click', modalCloseFn)
modalCloseBtn.addEventListener('click', modalCloseFn)




//notifications toast variables
const notificationToast = document.querySelector('[data-toast]')
const toastCloseBtn = document.querySelector('[data-toast-close]')

// notification toast event listeiner
toastCloseBtn.addEventListener('click', () =>{
    notificationToast.classList.add('closed')
})



// mobile menu variables 
const mobileMenuOpen = document.querySelectorAll('[data-mobile-menu-open-btn]')
const mobileMenu = document.querySelectorAll('[data-mobile-menu]')
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]')
const overlay = document.querySelector('[data-overlay]')

for (let i = 0 ; i < mobileMenuOpen.length; i++) {

    //mobile menu function
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active')
    }

    mobileMenuOpen[i].addEventListener('click', ()=>{
        mobileMenu[i].classList.add('active')
        overlay.classList.add('active')
    })

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click',mobileMenuCloseFunc);
}



//accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]')
const accordion = document.querySelectorAll('[data-accordion]')

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function() {
        const clickedBtn = this.nextElementSibling.classList.contains('active')

        for (let i = 0; i < accordion.length; i++) {

            if (clickedBtn) break;

            if (accordion[i].classList.contains('active')) {

                accordion[i].classList.remove('active')
                accordionBtn[i].classList.remove('active')
            }
        }

        this.nextElementSibling.classList.toggle('active')
        this.classList.toggle('active')
    })
}


