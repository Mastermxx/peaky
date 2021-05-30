// User info elements
const usernameDiv = document.querySelector('[data-user="username"]');
const userLevelDiv = document.querySelector('[data-user="level"]');
const userHealthBar = document.querySelector('[data-hp="user"]');
const userXPBar = document.querySelector('[data-xp="user"]');

// Button Selectors
const attackButton = document.querySelector('[data-attack]');

// UI Selectors
const monsterHealthBar = document.querySelector('[data-hp="monster"]');
const deadMessage = document.querySelector('[data-message="dead"]');
const monsterImage = document.querySelector('[data-img="monster"]')

// Get user data from Localstorage
const LocalUsername = localStorage.getItem('username')
let localLevel = localStorage.getItem('level')
let localXP = localStorage.getItem('xp')

// Set default user data for now
if (LocalUsername === null) {
    chooseUsername();
    localStorage.setItem('level', '1');
    localStorage.setItem('xp', '0');
}

// Functions

// Give yourself a username
function chooseUsername() {
    const username = prompt('What do you call yourself?')
    localStorage.setItem('username', username);
}

// Attack function
attackButton.addEventListener('click', () => {

    monsterImage.classList.remove('dead')
    console.log(calculateDamage())
    monsterHealthBar.value -= calculateDamage();


    if (monsterHealthBar.value === 0) {

        // dead message:
        monsterImage.classList.add('dead')
        monsterHealthBar.value = 100;

        // add xp
        userXPBar.value += 10;
        localStorage.setItem('xp', userXPBar.value);
    }

    // localStorage.getItem('xp');
    checkLevel(localStorage.getItem('xp'));
})

// Level up
function checkLevel(currentXP) {
    if (currentXP === 100) {

        const newLevel = localLevel + 1
        localLevel = localLevel + 1;
    }
}

function calculateDamage() {
    const randomNumber = Math.floor(Math.random() * 100);
    const baseDamage = 50;

    if (randomNumber >= 90) {
        return baseDamage + 10;
    } else {
       return baseDamage;
    }
}


function reward() {

}


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    userLevelDiv.innerHTML = localLevel;
    usernameDiv.innerHTML = LocalUsername;
    userXPBar.innerHTML = localXP;
});


