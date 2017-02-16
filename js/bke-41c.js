var BUTTON_ELEMENT = document.getElementsByClassName('game-button')[0];
var TURN_PLAYERIMAGE_ELEMENT =
    document.getElementsByClassName('players-turn')[0].getElementsByTagName('img')[0];
var TURN_PLAYERNUMBER_ELEMENT =
    document.getElementsByClassName('players-turn')[0].getElementsByTagName('td')[2];
var SCORE_PLAYER1_ELEMENT =
    document.getElementsByClassName('rounds-info')[0].getElementsByTagName('td')[1];
var SCORE_PLAYER2_ELEMENT =
    document.getElementsByClassName('rounds-info')[0].getElementsByTagName('td')[3];
var CURRENT_ROUND_ELEMENT =
    document.getElementsByClassName('rounds-info')[0].getElementsByTagName('td')[5];
var GAME_FIELD_ELEMENT =
    document.getElementById('speelveld').getElementsByTagName('img');

var PLAYER_IMAGES = [ 'img/empty.jpg', 'img/cross.jpg', 'img/circle.jpg' ];
//                          0                 1                2

var turn_player = 0;        // Deze verwijst ook naar de afbeelding in PLAYER_IMAGES
var score_player1 = 0;
var score_player2 = 0;
var current_round = 0;


window.onload = function() {
    // Klikbaar maken van de button
    BUTTON_ELEMENT.onclick = buttonClickHandler;

    // Bepalen welke speler mag beginnen
    turn_player = Math.round( Math.random() + 1);

    // Tonen welke speler mag beginnen
    TURN_PLAYERIMAGE_ELEMENT.src = PLAYER_IMAGES[turn_player];
    TURN_PLAYERNUMBER_ELEMENT.innerHTML = turn_player;

}

function buttonClickHandler() {
    if(BUTTON_ELEMENT.innerHTML == 'Start spel') {
        // 1. Ronde verhogen en tonen
        current_round = current_round + 1;                  // Verhogen
        CURRENT_ROUND_ELEMENT.innerHTML = current_round;    // Tonen in het element

        // 2. Tekst op de button veranderen in 'Reset spel'
        BUTTON_ELEMENT.innerHTML = 'Reset spel';

        // 3. Speelveld/cellen klikbaar maken
        for (celnum = 0; celnum < 9; celnum++) {
            GAME_FIELD_ELEMENT[celnum].onclick = cellClickHandler;
        }
    } else {
        clearGameField();
    }
}

function clearGameField() {
    for(celnum = 0; celnum < 9; celnum++) {
        GAME_FIELD_ELEMENT[celnum].src = 'img/empty.jpg';
    }
}

function cellClickHandler(event_info) {
    // Als de cel leeg is? Dan gaan we plaatje tonen in de cel en
    // Beurt overdragen, beurt informatie tonen op het scherm
    if(event_info.target.src.search('img/empty.jpg') > -1) {
        // Gevonden, dus de cel is leeg

        // Afbeelding in de cel tonen van de speler die aan de beurt is
        event_info.target.src = PLAYER_IMAGES[ turn_player ];

        // Beurt overdragen
        if(turn_player == 1)
            turn_player = 2;
        else
            turn_player = 1;

        // Op het scherm tonen wie nu aan de beurt is
        TURN_PLAYERNUMBER_ELEMENT.innerHTML = turn_player;              // Nummer
        TURN_PLAYERIMAGE_ELEMENT.src = PLAYER_IMAGES[ turn_player ];    // Afbeelding

        // Controleren of er iemand gewonnen heeft
        if(checkWinner(1)) {
            // Ja, Speler 1 heeft gewonnen
            score_player1++;
            SCORE_PLAYER1_ELEMENT.innerHTML = score_player1;
            current_round++;
            CURRENT_ROUND_ELEMENT.innerHTML = current_round;
            clearGameField();
        } else if(checkWinner(2)) {
            // Ja, Speler 2 heeft gewonnen
            score_player2++;
            SCORE_PLAYER2_ELEMENT.innerHTML = score_player2;
            current_round++;
            CURRENT_ROUND_ELEMENT.innerHTML = current_round;
            clearGameField();
        }
    }

}

function checkWinner(welke_speler) {
    // Rij 1 - Cellen 0, 1, 2
    if(GAME_FIELD_ELEMENT[0].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[1].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[2].src.search(PLAYER_IMAGES[welke_speler]) > -1) {
        return true;
    }

    // Rij 2 - Cellen 3, 4, 5
    if(GAME_FIELD_ELEMENT[3].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[4].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[5].src.search(PLAYER_IMAGES[welke_speler]) > -1) {
        return true;
    }

    // Rij 3 - Cellen 6, 7, 8
    if(GAME_FIELD_ELEMENT[6].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[7].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[8].src.search(PLAYER_IMAGES[welke_speler]) > -1) {
        return true;
    }

    // Kolom 1 - Cellen 0, 1, 2
    if(GAME_FIELD_ELEMENT[0].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[3].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[6].src.search(PLAYER_IMAGES[welke_speler]) > -1) {
        return true;
    }

    // Kolom 2 - Cellen 3, 4, 5
    if(GAME_FIELD_ELEMENT[1].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[4].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[7].src.search(PLAYER_IMAGES[welke_speler]) > -1) {
        return true;
    }

    // Kolom 3 - Cellen 6, 7, 8
    if(GAME_FIELD_ELEMENT[2].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[5].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[8].src.search(PLAYER_IMAGES[welke_speler]) > -1) {
        return true;
    }

    // Diagonaal 1 - Cellen 3, 4, 5
    if(GAME_FIELD_ELEMENT[0].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[4].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[8].src.search(PLAYER_IMAGES[welke_speler]) > -1) {
        return true;
    }

    // Diagonaal 2 - Cellen 6, 7, 8
    if(GAME_FIELD_ELEMENT[2].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[4].src.search(PLAYER_IMAGES[welke_speler]) > -1 &&
        GAME_FIELD_ELEMENT[6].src.search(PLAYER_IMAGES[welke_speler]) > -1) {
        return true;
    }

    return false;
}









