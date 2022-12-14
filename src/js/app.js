// UI Variables
const body = document.querySelector('body')
const navbarClose = document .querySelector('.navbar__close')
const navigation = document.querySelector('.navbar')

// Toggle Theme
document.querySelector('.theme-toggle').addEventListener('click', e => {
    // if lightbulb is on, remove the dark-theme styles class and remove the lightbulb (icon)
    if(e.target.classList.contains('light-mode')) {
        body.classList.remove('dark-theme')
        e.target.style.display = 'none'
        e.target.nextElementSibling.style.display = 'block'
        return
    }
    // if the lightbulb is off, add dark-theme styles class and display lightbulb (icon)
    if(e.target.classList.contains('dark-mode')) {
        body.classList.add('dark-theme')
        e.target.style.display = 'none'
        e.target.previousElementSibling.style.display = 'block'
        return
    }
})

// Toggle Navigation
document.querySelector('.navbar__toggle').addEventListener('click', (e)=> {
    navbarClose.classList.toggle('hidden')
    navigation.classList.toggle('hidden')
})