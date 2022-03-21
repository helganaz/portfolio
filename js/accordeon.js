const accordeon = document.querySelector('.feature-list')
const accordeonBtns = document.querySelectorAll('.feature__link')

accordeonBtns.forEach((btn) => {
    btn.addEventListener(('click'), () => {
        // перебираем и закрываем
        accordeonBtns.forEach((button) => {
            button.classList.remove('feature__link_active')
            button.nextElementSibling.classList.add('hidden')
        })
        btn.classList.toggle('feature__link_active')
        // nextElementSibling - следующий элемент по списку
        btn.nextElementSibling.classList.toggle('hidden')
    })
})