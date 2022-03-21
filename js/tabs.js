const tabsButtons = document.querySelectorAll('.design-list__item');
const tabsDescr = document.querySelectorAll('.design__descr');
const tabsImages = document.querySelectorAll('.design-images');
const tabsTitle = document.querySelectorAll('.design__title');
const tabsBlock = document.querySelectorAll('.design-block__img');

// array - получаемый NodeList - псевдомассив
const changeContent = (array, value) => {
    array.forEach((elem) => {
            if (elem.dataset.tabsField === value) {
                elem.classList.remove('hidden')
            } else {
                elem.classList.add('hidden')
            }
        })
}

tabsButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler
        
        changeContent(tabsDescr, dataValue)
        changeContent(tabsImages, dataValue)
        changeContent(tabsTitle, dataValue)
        changeContent(tabsBlock, dataValue)
       
        tabsButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
  })  
})
