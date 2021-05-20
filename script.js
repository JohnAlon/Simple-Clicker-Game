let entity = document.getElementById('entity')
let entityHp = document.getElementById('entityHp')
let killDispaly = document.getElementById('kills')
let damageDisplay = document.getElementById('damage')
let health = 500
let hp = health
let kills = 0
let bonus = 0

function firstEnemy() {
    health = 500
    document.getElementById("entity").src="img/green_slime.png";
}

function secondEnemy() {
    health = 700
    document.getElementById("entity").src="img/blue_slime.png";
}

function thirdEnemy() {
    health = 1000
    document.getElementById("entity").src="img/red_slime.png";
}

entity.addEventListener('click', function(){
    let damage = 1 + bonus
    hp = hp - damage
    entityHp.textContent = 'HP: ' + hp
    let killBonus = kills % 10

    if (hp <= 0){

        hp = health
        kills++
        killDispaly.textContent = kills

        if (kills >= 10) {
            let x = kills % 10
            if (x == 0) {
                bonus ++
            }
        }
        damageDisplay.textContent = bonus + 1
        let randEnemy = Math.round((Math.random() * 4))
        if (randEnemy == 1) {
            firstEnemy()
        }
        if (randEnemy == 2) {
            secondEnemy()
        }
        if (randEnemy == 3) {
            thirdEnemy()
        }
    }

    function progress() {
        let elem = document.getElementById('progressLine')
        let per = hp * 100 / health
        elem.style.width = per + '%';
    }
    progress();
});