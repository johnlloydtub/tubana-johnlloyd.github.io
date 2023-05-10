// Home Animation
window.addEventListener("load", function () {
    const elem = document.querySelector(".main .container");
    const imgElem = document.querySelector(".main .home-img img");

    elem.classList.add("container-isActive"); 

    imgElem.addEventListener("mousemove", function (event) {
        const xPosition = event.layerX;
        const yPosition = event.layerY;

        imgElem.style.transform =`rotateY(${xPosition/50}deg) rotateX(${-yPosition/50}deg)`;
    });
});


// Add highlight class To Menu Items
function highlightMenu () {
    const element = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const servicesMenu = document.querySelector("#services-page");
    const projectsMenu = document.querySelector("#projects-page");
    const contactMenu = document.querySelector("#contact-page");
    let scrollPosition = window.scrollY;

    if (window.innerWidth > 991 && scrollPosition < 550) {
        homeMenu.classList.add("highlight");
        servicesMenu.classList.remove("highlight");
        return

    }else if (window.innerWidth > 991 && scrollPosition < 1165) {
        servicesMenu.classList.add("highlight");
        homeMenu.classList.remove("highlight");
        projectsMenu.classList.remove("highlight");
        return

    }else if (window.innerWidth > 991 && scrollPosition < 1930) {
        projectsMenu.classList.add("highlight");
        servicesMenu.classList.remove("highlight");
        contactMenu.classList.remove("highlight");
        return
        
    }else if (window.innerWidth > 991 && scrollPosition < 2479) {
        contactMenu.classList.add("highlight");
        projectsMenu.classList.remove("highlight");
        return
        
    }

    if ((element && window.innerWidth < 991 && scrollPosition < 600) || element) {
        element.classList.remove("highlight");
    }
}

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);


