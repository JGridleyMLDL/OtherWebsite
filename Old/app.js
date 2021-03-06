
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation');

    const navLinks = document.querySelectorAll('.navigation li')

    //Toggle tab
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Display Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.25s ease forwards ${index / 7 + 0.2}s`
            }
        });

        // Burger Animation

        burger.classList.toggle('toggle');
    });
}

navSlide();