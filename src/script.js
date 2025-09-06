const d = document,
$btnOpen = d.querySelector(".menu-mobile__btn--open"),
$btnClose = d.querySelector(".menu-mobile__btn--close"),
$menu = d.querySelector(".menu-mobile__menu");

const fadeIn = d.querySelector('.fade-in')


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

let observer = new IntersectionObserver(visible, {})

function visible(entries) {
    let entry = entries[0]
    if(entry.isIntersecting) {
        console.log("Visible")
        fadeIn.classList.add('visible')
        observer.unobserve(fadeIn);
    } else {
        console.log("Invisible")
        fadeIn.classList.remove('visible')
    }
}

observer.observe(fadeIn)

