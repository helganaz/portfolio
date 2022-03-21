const links = document.querySelectorAll('.menu-list__link');
const btn = document.querySelector('.main__button');
const btnScroll = document.querySelector('.main__scroll')

// включим кнопку в перебираемый массив
const allLinks = [...links, btn, btnScroll]

allLinks.forEach(link => {
    link.addEventListener(('click'), (event) => {
        event.preventDefault();
        // substring отрезает # от id
        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        
        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
            
            // не работает с Safari
            // section.scrollIntoView({
            //     block: 'start',
            //     behavior: 'smooth'

            // })
        }
    })
})