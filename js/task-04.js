
let counterValue = 0

const counter = document.querySelector('#value')
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

decrementBtn.addEventListener('click', () => {
	counterValue--
	counter.textContent = counterValue
})

incrementBtn.addEventListener('click', () => {
	counterValue++
	counter.textContent = counterValue
})

console.log(decrementBtn);
console.log(incrementBtn);