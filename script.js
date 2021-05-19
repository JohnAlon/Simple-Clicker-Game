let entity = document.getElementById('entity')
let entityHp = document.getElementById('entityHp')
let hp = 500
entity.addEventListener('click', function(){
    hp--
    entityHp.textContent = 'HP: ' + hp

    if (hp == 0){
        hp = hp +1500
    }
});
