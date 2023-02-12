const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', event => {
	output.textContent = event.target.value

	output.textContent = event.target.value || "Anonymous"
	}
)
