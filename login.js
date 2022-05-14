let buttonLogin = document.querySelector('.button-login')
let form = document.querySelector('form')
let gifLogin = document.querySelector('.swal2-icon')

buttonLogin.addEventListener('click', (e)=>{
    e.preventDefault()
    form.classList.add('animate__animated', 'animate__rollOut')
    gifLogin.classList.add('animate__animated', 'animate__backInLeft','animate__fast')
    gifLogin.style.display = 'flex'
})