// Globale en constante variabelen
var GAME_FIELD = document.getElementById('speelveld').getElementsByTagName('img');
var ELEMENT_SCORE_PLAYER1 = document.getElementsByClassName('rounds-info')[0].getElementsByTagName('td')[1];
var ELEMENT_SCORE_PLAYER2 = document.getElementsByClassName('rounds-info')[0].getElementsByTagName('td')[3];
var ELEMENT_ROUND = document.getElementsByClassName('rounds-info')[0].getElementsByTagName('td')[5];
var ELEMENT_BUTTON = document.getElementsByClassName('game-button')[0];
var PLAYER_IMAGES = [ 'img/cross.jpg', 'img/circle.jpg' ];
//                          0                   1

// Hieronder staan de index waarden t.b.v. de array's
var PLAYER1 = 0;
var PLAYER2 = 1;

var turn_image = document.getElementsByClassName('players-turn')[0]
                 .getElementsByTagName('img')[0];
var turn_number = document.getElementsByClassName('players-turn')[0]
                 .getElementsByTagName('td')[2];
var player_scores = [ 0, 0 ];
var current_round = 0;
var player_turn = PLAYER1;      // Hierin kunnen we zien wie aan de beurt is

// --------------------------------------------------------------------
// Hieronder begint de programmacode
// --------------------------------------------------------------------

/*
    buttonClickHandler
    Handelt de clicks op de button af:
    Start spel - Click Event Handlers koppelen aan de cellen in het speelveld en zo
    Reset spel - Speelveld weer leegmaken en de ronde opnieuw beginnen en zo
 */
function buttonClickHandler() {
    for(var celnum = 0; celnum < 9; celnum++) {
        GAME_FIELD[celnum].onclick = cellClickHandler;
    }
}

/*
    clearGameField
    Maakt het speelveld leeg door aan alle img-tags de image empty.jpg toe te wijzen
 */
function clearGameField() {
    for(var celnum = 0; celnum < 9; celnum++) {
        GAME_FIELD[celnum].src = 'img/empty.jpg';
    }
}

/*
    Initialisatie
    Onze game wordt geïnitialiseerd, dus voorbereid zodat er gespeeld kan worden
 */
window.onload = function() {
    ELEMENT_BUTTON.onclick = buttonClickHandler;
    player_scores[0] = 0;
    player_scores[1] = 0;
    current_round = 0;
    player_turn = Math.round(Math.random());
    turn_image.src = PLAYER_IMAGES[player_turn];
    turn_number.innerHTML = player_turn;

    //clearGameField();
};

/*
    cellClickHandler
    Handelt alle klik gebeurtenissen op de speelveld cellen af.
    Maar aangezien dit een functie is voor alle 9 cellen,
    moet deze functie wel zelf ontdekken op welke cel
    geklikt is. Hiervoor maken we gebruik van een argument genaamd
    event_element. Dit is een soort variabele die door de javascript
    engine automatisch gevuld wordt met alle mogelijke informatie over
    de gebeurtenis.
 */
function cellClickHandler(event_element) {
    console.log(event_element);
    if(event_element.target.src.search('empty') >= 0) {
        console.log('Hij is leeg');
    } else {
        console.log('Hij is NIET leeg');
    }
}




