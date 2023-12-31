
let player = {
    name: prompt("Please enter your name : "),
    chips: []
}
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let dealersEl = document.getElementById("dealers-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": £" + player.chips

function getRandomCard() {
    randomCard = Math.ceil(Math.random() * 13);
    if (randomCard === 1) {
        return 11
    } else if (randomCard >= 11) {
        return 10
    } else {
        return randomCard
    }

}

function startGame() {
    cards = [];
    sum = 0;
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    sum += firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?" ;
    } else if (sum === 21) {
        message = "You've got Blackjack!" ;
        player.chips += 21 
        hasBlackJack = true; 
        sum = 0;
        cards = []
    } else {
        message = "You're out of the game!"  ;
        isAlive = false
        sum = 0;
        cards = []
    }
    
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }
}

function stick() {
    let dealersNumber = getRandomCard() * 2;
    dealersEl.textContent = "Dealers Draw is: " + dealersNumber;
    if (dealersNumber <= sum) {
        player.chips += 9;
        cards = [];
        sum = 0
    } else {
        cards = [];
        sum = 0
    }
}
