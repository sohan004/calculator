const input = document.getElementById('input')
const allBtn = document.querySelectorAll('.btn-1')
allBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.innerText === 'AC') {
            input.value = '';
        }
        else if (e.target.innerText === 'Del') {
            const sp = input.value.split('')
            sp.pop()
            input.value = sp.join('')
        }
        else {
            input.value += e.target.innerText
        }
    })
})


const equal = () => {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'syntext eror'
    }
}



document.getElementById('equal').addEventListener('click', () => {
    equal()
})

input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        equal()
    }
});


