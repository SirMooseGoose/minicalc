/**
 * Se detta som en grund att utgå ifrån.
 * Det är helt fritt att ändra och ta bort kod om ni
 * önskar lösa problemen med andra metoder.
 */

let lcd = null; // displayen

let memory = 0; // Lagrat/gamlat värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /

function init() {
    lcd = document.getElementById('lcd');
    let keyBoard = document.getElementById('keyBoard')
    keyBoard.onclick = buttonClick;
}

/**
 * Händelsehanterare för kalkylatorns tangentbord
 */
function buttonClick(e) {
    let btn = e.target.id; //id för den tangent som tryckte ner


    // kollar om siffertangent är nedtryckt
    if (btn.substring(0, 1) === 'b') {
        let digit = btn.substring(1, 2); // plockar ut siffran från id:et
        addDigit(digit);

    } else if(btn === 'enter'){
        calculate();
    } else if(btn === 'clear'){
        memClear();
        clearLCD();
        
    } else if( btn === 'comma') {
        addComma();
    }  else{ // Inte en siffertangent, övriga tangenter.
        setOperator(btn, lcd.value);
    }
}

/**
 *  Lägger till siffra på display.
 */
function addDigit(digit) {
    lcd.value = lcd.value + digit;
    
}

/**
 * Lägger till decimaltecken
 */
function addComma() {
    if(isComma === false){
        lcd.value = lcd.value + '.';
        isComma = true;
    }else{
        lcd.value = "det finns redan ett komma";
    }
    

}

/**
 * Sparar operator.
 * +, -, *, /
 */
function setOperator(operator, nummer){

    memory = nummer;
    arithmetic = operator;
    clearLCD();



}

/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {

    if(arithmetic === 'add'){
        lcd.value = +memory+ + lcd.value;
    }else if(arithmetic === 'sub'){
        lcd.value = memory - lcd.value;
    }else if(arithmetic === 'mul'){
        lcd.value = memory * lcd.value;
    }else if(arithmetic === 'div'){
        lcd.value = memory / lcd.value;
    }

}

/** Rensar display */
function clearLCD() {
    lcd.value = '';
    isComma = false;
}

/** Rensar allt, reset */
function memClear(){
    memory = 0;
    arithmetic = null;
    clearLCD();
}

window.onload = init;
