
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

    console.log(form);
    form.reset()
    console.log({email: email.value, password: password.value });
}

//у завданні №3 - треба вивести не form,  а об"єкт зі начення полів з форми)) 
//отак: {email: email.value, password: password.value }
//але я бачу що ви підготували змінну навіть для цього formData то мабуть у вас просто опечатка)) 
//але я приймаю роботу зараз, а ви будь-ласка доробіть вже цей момент так щоб все було ідеально👍