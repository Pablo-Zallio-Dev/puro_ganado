const d = document,
  $btnOpen = d.querySelector(".menu-mobile__btn--open"),
  $btnClose = d.querySelector(".menu-mobile__btn--close"),
  $formCheck = d.querySelector(".form__check"),
  $response = d.querySelector(".response"),
  $responseBtn = d.querySelector(".response__btn"),
  $checkbox = d.getElementById("checkbox");
$menu = d.querySelector(".menu-mobile__menu");

d.addEventListener("click", (e) => {
  if (e.target === $btnOpen) {
    $btnOpen.classList.toggle("menu-mobile__btn--disabled");
    $btnClose.classList.toggle("menu-mobile__btn--disabled");
    $menu.style.transform = "translateX(0)";
  }

  if (e.target === $btnClose || e.target !== $btnOpen) {
    $btnClose.classList.add("menu-mobile__btn--disabled");
    $btnOpen.classList.remove("menu-mobile__btn--disabled");
    $menu.style.transform = "translateX(100%)";
  }

  if (e.target === $responseBtn) {
    $response.style.display = "none";
  }
});

d.addEventListener("DOMContentLoaded", () => {
  validationForm();
});

const fadeIn = d.querySelectorAll(".fade-in");

let observer = new IntersectionObserver(visible, {});

function visible(entries) {
  let entry = entries;
  entry.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("visible");
      observer.unobserve(el.target);
    }
  });
}

fadeIn.forEach((el) => {
  observer.observe(el);
});

function validationForm() {
  const $form = d.querySelector(".form__contact"),
    $inputs = d.querySelectorAll(".form__contact [required]");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("form__span", "form__display__none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".form__contact [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("span__active")
          : d.getElementById($input.name).classList.remove("span__active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    if ($checkbox.checked) {
      console.log("Enviar");
      $response.style.display = "flex";

      setTimeout(() => {
        $form.reset();
      }, 2000);
    } else {
      $formCheck.classList.add("form__check--error");
    }
  });
}

/* 


  d.addEventListener("change", (e) => {
    if(e.target === $checkbox) {
      if($checkbox.checked) {
        console.log("Marcado")
      } else {
        console.log("Desmarcado")
      }
      
    } 
  })





let regex = new RegExp(pattern)
        return !regex.exec($input.value)
        ? d.getElementById($input.name).classList.add("form__display__none")
        : d.getElementById($input.name).classList.remove("form__display__none")



let regex = new RegExp(pattern)
        return !regex.exec($input.value)
        ? d.getElementById($input.name).classList.remove("span__active")

        : d.getElementById($input.name).classList.add("span__active")
            
            */
