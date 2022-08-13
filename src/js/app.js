
const mainContainer = document.querySelector('body')

document.querySelector('.theme-toggle').addEventListener('click', e => {
    if(e.target.classList.contains('light-mode')) {
        mainContainer.classList.remove('dark-theme')
        e.target.style.display = 'none'
        e.target.nextElementSibling.style.display = 'block'
        return
    }
    if(e.target.classList.contains('dark-mode')) {
        mainContainer.classList.add('dark-theme')
        e.target.style.display = 'none'
        e.target.previousElementSibling.style.display = 'block'
        return
    }
})

