// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["A", "B"]);  // You can determine global (random) parameters here

const pronouns = {
"name_hbf_1": { "A" : "si*er", "B" : "er"} ,
"name_kaugummi_3": { "A" : "Si*er", "B" : "Sie"} ,
"name_allergie_5": { "A" : "si*er", "B" : "er"} ,
"name_gruss_7": { "A" : "si*er", "B" : "sie"} ,
"name_arbeit_9": { "A" : "Si*er", "B" : "Er"} ,
"person_bewerbung_11": { "A" : "si*er", "B" : "sie"} ,
"person_bus_13": { "A" : "Si*er", "B" : "Er"} ,
"person_seminar_15": { "A" : "si*er", "B" : "sie"} ,
"person_gemeinderat_17": { "A" : "Si*er", "B" : "Er"} ,
"person_hausgemeinschaft_19": { "A" : "Si*er", "B" : "Sie"} ,
"mensch_ampel_21": { "A" : "Si*er", "B" : "Er"} ,
"mensch_wahl_23": { "A" : "si*er", "B" : "sie"} ,
"mensch_examen_25": { "A" : "Si*er", "B" : "Er"} ,
"mensch_kasse_27": { "A" : "Si*er", "B" : "Sie"} ,
"mensch_krankenkasse_29": { "A" : "si*er", "B" : "er"} ,
"name_sicherung_2": { "A" : "er", "B" : "si*er"} ,
"name_balkon_4": { "A" : "sie", "B" : "si*er"} ,
"mensch_verwaehlt_6": { "A" : "er", "B" : "si*er"} ,
"name_computer_8": { "A" : "sie", "B" : "si*er"} ,
"name_institut_10": { "A" : "sie", "B" : "si*er"} ,
"name_fussball_12": { "A" : "er", "B" : "si*er"} ,
"person_handschrift_14": { "A" : "Er", "B" : "Si*er"} ,
"person_tee_16": { "A" : "sie", "B" : "si*er"} ,
"person_theater_18": { "A" : "Er", "B" : "Si*er"} ,
"mensch_vorhang_20": { "A" : "Er", "B" : "Si*er"} ,
"person_jacke_22": { "A" : "sie", "B" : "si*er"} ,
"person_garten_24": { "A" : "Sie", "B" : "Si*er"} ,
"mensch_telefon_26": { "A" : "Er", "B" : "Si*er"} ,
"mensch_sonne_28": { "A" : "Er", "B" : "Si*er"} ,
"mensch_auto_30": { "A" : "er", "B" : "si*er"} 
};


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
