const d = document,
$btnOpen = d.querySelector(".menu-mobile__btn--open"),
$btnClose = d.querySelector(".menu-mobile__btn--close"),
$menu = d.querySelector(".menu-mobile__menu");


d.addEventListener('click', (e) => {
    if(e.target === $btnOpen) {
        $btnOpen.classList.toggle("menu-mobile__btn--disabled")
        $btnClose.classList.toggle("menu-mobile__btn--disabled")
        $menu.style.transform = "translateX(0)"
    }

    if((e.target === $btnClose) || (e.target !== $btnOpen)) {
        $btnClose.classList.add("menu-mobile__btn--disabled")
        $btnOpen.classList.remove("menu-mobile__btn--disabled")
        $menu.style.transform = "translateX(100%)"

    }
})