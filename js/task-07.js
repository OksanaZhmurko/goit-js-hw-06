const inputChange = document.querySelector('input#font-size-control');
const Abracadabra = document.querySelector('span#text');

inputChange.addEventListener('change', e => {
    Abracadabra.style.fontSize = `${e.target.value }px`
});

console.log(inputChange);
console.log(Abracadabra);