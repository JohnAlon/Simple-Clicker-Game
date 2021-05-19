let entity = document.getElementById('entity')
let counter = document.getElementById('scoreCounter')
let score = 0
entity.addEventListener('click', function(){
    score++
    counter.textContent = 'Your score: ' + score
});