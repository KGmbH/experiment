// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
* coin = Gruppen A und B
* MPs = je nach Gruppe eine oder keine Modalpartikel im Satz 
*/
const coin = _.sample(["A", "B"]);  // You can determine global (random) parameters here

const MPs = {
"b_sem_doch1": { "A" : "Kleinen | doch | mal", "B" : "Kleinen | mal"} ,
"b_sem_denn2": { "A" : "soll | dann", "B" : "soll | denn | dann"} ,
"t_sem_ja3": { "A" : "hab | ja | schon", "B" : "hab | schon"} ,
"t_sem_einfach4": { "A" : "Gläsern | nicht.", "B" : "Gläsern | einfach | nicht."} ,
"b_prag_eigentlich5": { "A" : "aber | eigentlich | ganz", "B" : "aber | ganz"} ,
"b_prag_ja6": { "A" : "backe | selber", "B" : "backe | ja | selber"} ,
"t_prag_denn7": { "A" : "das | denn? | Da", "B" : "das? | Da"} ,
"t_prag_doch8": { "A" : "warst | nie", "B" : "warst | doch | nie"} ,
"b_text_einfach9": { "A" : "bist | einfach | da.", "B" : "bist | da."} ,
"b_text_eigentlich10": { "A" : "das, | bereit", "B" : "das | eigentlich, | bereit"} ,
"t_text_doch11": { "A" : "klingt | doch | ganz", "B" : "klingt | ganz"} ,
"t_text_eigentlich12": { "A" : "ihr, | wenn ", "B" : "ihr | eigentlich, | wenn"} ,

"b_sem_eigentlich13": { "A" : "Auto | eigentlich | die", "B" : "Auto | die"} ,
"b_sem_ja14": { "A" : "komme | so", "B" : "komme | ja | so"} ,
"t_sem_einfach15": { "A" : "interessiert, | einfach | mal", "B" : "interessiert, | mal"} ,
"t_sem_denn16": { "A" : "ihr | keine", "B" : "ihr | denn | keine"} ,
"b_prag_doch17": { "A" : "ich | doch | selbst", "B" : "ich | selbst"} ,
"b_prag_einfach18": { "A" : "nervt.", "B" : "nervt | einfach."} ,
"t_prag_eigentlich19": { "A" : "du | eigentlich | noch", "B" : "du | noch"} ,
"t_prag_ja20": { "A" : "hatten | den", "B" : "hatten | ja | den"} ,
"b_text_denn21": { "A" : "soll | denn | bitteschön", "B" : "soll | bitteschön"} ,
"b_text_doch22": { "A" : "oder | gelegentlich", "B" : "oder | doch | gelegentlich"} ,
"t_text_einfach23": { "A" : "habe | einfach | angenommen,", "B" : "habe | angenommen,"} ,
"t_text_denn24": { "A" : "da | noch?", "B" : "da | denn | noch?"} ,

"b_sem_ja25": { "A" : "Kleidungsstücken | ja | vor.", "B" : "Kleidungsstücken | vor."} ,
"b_sem_einfach26": { "A" : "sei | vom", "B" : "sei | einfach | vom"} ,
"t_sem_doch27": { "A" : "Mutter | doch | Strom", "B" : "Mutter | Strom"} ,
"t_sem_eigentlich28": { "A" : "wollte | gerade", "B" : "wollte | eigentlich | gerade"} ,
"b_prag_denn29": { "A" : "hat | denn | jetzt", "B" : "hat | jetzt"} ,
"b_prag_eigentlich30": { "A" : "die | nur", "B" : "die | eigentlich | nur"}, 
"t_prag_denn31": { "A" : "hat | denn | dieses", "B" : "hat | dieses"} ,
"t_prag_einfach32": { "A" : "macht | keinen", "B" : "macht | einfach | keinen"} ,
"b_text_einfach33": { "A" : "er | einfach | so", "B" : "er | so"} ,
"b_text_ja34": { "A" : "ist | ausreichend", "B" : "ist | ja | ausreichend"} ,
"t_text_ja35": { "A" : "ihr | ja | Lust", "B" : "ihr | Lust"} ,
"t_text_doch36": { "A" : "macht | was", "B" : "macht | doch | was"} 
};


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

