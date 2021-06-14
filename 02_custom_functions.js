// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["A", "B"]);  // You can determine global (random) parameters here

const pronouns = {
    "1name_hbf": { "A" : "si*er", "B" : "er"} ,
    "3name_kaugummi": { "A" : "Si*er", "B" : "Sie"} ,
    "5name_allergie": { "A" : "si*er", "B" : "er"} ,
    "7name_gruss": { "A" : "si*er", "B" : "sie"} ,
    "9name_arbeit": { "A" : "Si*er", "B" : "Er"} ,
    "11person_bewerbung": { "A" : "si*er", "B" : "sie"} ,
    "13person_bus": { "A" : "Si*er", "B" : "Er"} ,
    "15person_seminar": { "A" : "si*er", "B" : "sie"} ,
    "17person_gemeinderat": { "A" : "Si*er", "B" : "Er"} ,
    "19person_hausgemeinschaft": { "A" : "Si*er", "B" : "Sie"} ,
    "21mensch_ampel": { "A" : "Si*er", "B" : "Er"} ,
    "23mensch_wahl": { "A" : "si*er", "B" : "sie"} ,
    "25mensch_examen": { "A" : "Si*er", "B" : "Er"} ,
    "27mensch_kasse": { "A" : "Si*er", "B" : "Sie"} ,
    "29mensch_krankenkasse": { "A" : "si*er", "B" : "er"} ,
    "2name_sicherung": { "A" : "er", "B" : "si*er"} ,
    "4name_balkon": { "A" : "sie", "B" : "si*er"} ,
    "6mensch_verwaehlt": { "A" : "er", "B" : "si*er"} ,
    "8name_computer": { "A" : "sie", "B" : "si*er"} ,
    "10name_institut": { "A" : "sie", "B" : "si*er"} ,
    "12name_fussball": { "A" : "er", "B" : "si*er"} ,
    "14person_handschrift": { "A" : "Er", "B" : "Si*er"} ,
    "16person_tee": { "A" : "sie", "B" : "si*er"} ,
    "18person_theater": { "A" : "Er", "B" : "Si*er"} ,
    "20mensch_vorhang": { "A" : "Er", "B" : "Si*er"} ,
    "22person_jacke": { "A" : "sie", "B" : "si*er"} ,
    "24person_garten": { "A" : "Sie", "B" : "Si*er"} ,
    "26mensch_telefon": { "A" : "Er", "B" : "Si*er"} ,
    "28mensch_sonne": { "A" : "Er", "B" : "Si*er"} ,
    "30mensch_auto": { "A" : "er", "B" : "si*er"} 
    }


/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};

const participantID = generateID(6);

// Declare your helper functions here



/* Hooks  
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
