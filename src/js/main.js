const d = document;

const $btnMenu = d.querySelector(".header__btnMenu, .header__btnMenu *")
const $btnClose = d.querySelector(".header__btnClose, .header__btnClose *")
const $menu = d.querySelector(".menu")


d.addEventListener('click', (e) => {
    if(e.target === $btnMenu) {
        console.log("Hola")
       $btnMenu.style.transform = "scale(0)"
       $btnMenu.style.opacity = 0
       $btnClose.style.opacity = 1
       $btnClose.style.transform = "scale(1)"
       $menu.style.transform = "translateX(0)"
    } 
    
    if((e.target === $btnClose) || (e.target !== $btnMenu)){
        $btnMenu.style.transform = "scale(1)"
        $btnMenu.style.opacity = 1
        $btnClose.style.opacity = 0
       $btnClose.style.transform = "scale(0)"
       $menu.style.transform = "translateX(100%)"

    }
    
   

})