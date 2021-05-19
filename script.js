let entity = document.getElementById('entity')
let entityHp = document.getElementById('entityHp')
let hp = 1000
entity.addEventListener('click', function(){
    hp--
    entityHp.textContent = 'HP: ' + hp

    if (hp == 0){
        hp = hp + 1000
    }

    function progress() {
        let elem = document.getElementById('progressLine')
        let per = hp / 10
        elem.style.width = per + '%';
    }
    progress();

});