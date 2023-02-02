const switchToggle = document.querySelector('.switch-toggle')
const background = document.querySelector('#app')

switchToggle.addEventListener('click', function(){
    switchToggle.classList.toggle('move')
    background.classList.toggle('dark-theme')
})