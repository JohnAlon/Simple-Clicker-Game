let entity = document.getElementById('entity')
let entityHp = document.getElementById('entityHp')
let killDispaly = document.getElementById('kills')
let damageDisplay = document.getElementById('damage')
let hp = 10
let kills = 0
let bonus = 0
entity.addEventListener('click', function(){
    let damage = 1 + bonus
    hp = hp - damage
    entityHp.textContent = 'HP: ' + hp
    let killBonus = kills % 10

    if (hp <= 0){

        hp = 10
        kills++
        killDispaly.textContent = 'Kills: ' + kills

        if (kills >= 10) {
            let x = kills % 10
            if (x == 0) {
                bonus ++
            }
        }
        damageDisplay.textContent = 'Damage: ' + (bonus + 1)
    }

    function progress() {
        let elem = document.getElementById('progressLine')
        let per = hp / 10
        elem.style.width = per + '%';
    }
    progress();

    console.log(kills + ' --- ' + bonus)

});