const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', event => {
	output.textContent = event.target.value

	if (event.target.value === '') {
		output.textContent = 'Anonymous'
	}
})

console.log(textInput);
console.log(output);