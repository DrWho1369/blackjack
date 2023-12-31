let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

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
    if (sum<= 20) {
        message = "Do you want to draw a new card?" ;
    } else if (sum === 21) {
        message = "You've got Blackjack!" ;
    } else {
        message = "You're out of the game!"  ;
    }
    
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame()
}

