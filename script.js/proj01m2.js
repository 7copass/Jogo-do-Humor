let button = document.getElementById('button')
let humor = document.getElementById('humor')
let img = document.getElementById('img_alegria')


function troca() {
    
    if (button.value == 'primeiro') {
        img.src = './assets/tristeza.png'
        humor.innerHTML = ' <p><strong>Humor:</strong>Tristeza</p>'
        button.value = 'segundo'
    } else if (button.value == 'segundo') {
        img.src = './assets/nojinho.png'
        humor.innerHTML = ' <p><strong>Humor:</strong>Nojinho</p>'
        button.value = 'terceiro'
    } else if (button.value == 'terceiro') {
        img.src = './assets/medo.png'
        humor.innerHTML = ' <p><strong>Humor:</strong>Medo</p>'
        button.value = 'quarto'
    } else if (button.value == 'quarto') {
        img.src = './assets/raiva.png'
        humor.innerHTML = '<p><strong>Humor:</strong>Raiva</p>'
        button.value = 'quinto'
    } else if (button.value == 'quinto') {
        img.src = './assets/alegria.png'
        humor.innerHTML = '<p><strong>Humor:</strong> Alegria</p>'
        button.value = 'primeiro'
    }

}