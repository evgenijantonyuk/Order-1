
document.addEventListener("DOMContentLoaded", function () {
    const modalController = ({ modal, btnOpen, btnClose, time = 300 }) => {
        const modalMain = document.querySelector(modal)
        const modalClose = document.querySelector('.modal__close')
        const modalOpens = document.querySelectorAll(btnOpen)
        
        modalMain.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity ${time}ms ease-in-out;
`
        
        const closeModal = (e) => {
            const target = e.target
            
            if (target === modalMain ||
                (btnClose && target.closest(btnClose)) ||
                event.code === 'Escape'
            ) {
                modalMain.style.opacity = '0'
                setTimeout(() => {
                    modalMain.style.visibility = 'hidden'
                }, time)
                
                window.removeEventListener('keydown', closeModal)
            }
        }
        
        const openModal = () => {
            modalMain.style.visibility = 'visible'
            modalMain.style.opacity = '1'
            window.addEventListener('keydown', closeModal)
        }
        
        modalOpens.forEach(btn => {
            btn.addEventListener('click', openModal)
        })
        
        modalMain.addEventListener('click', closeModal)
    }
    
    modalController({
        modal: '.modal',
        btnOpen: '.modal__button',
        btnClose: '.modal__close',
        time: 1000
    })
//     mobile window
    const openMenu = document.getElementById('burger')
    const mobileMenu = document.getElementById('menu')
    const closeMenu = document.querySelector('.header__burger-btn')
    
    openMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('active')
        closeMenu.classList.toggle('active')
    })
})
