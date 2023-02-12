
const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Заполните пожалуйста все поля!')
    }
    const formData = { email: email.value, Password: password.value }
    
    console.log(form);
    form.reset()
}