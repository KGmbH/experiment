const trial_info = {
  tryout: [ // trial items - dienen nur der Übung
    {
      sentence: "Die | Katze | jagt | eine | kleine | schwarze | Maus. | Eigentlich | will | die | Katze | nur | spielen, | schließlich | ist | sie | noch | satt | vom | Abendessen.",
      question: "Ist die Maus grau?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "training_katze",
      participant_group: "A",
      participant_id: participantID,
      wordPos: 'same',
      underline: 'none'
    },
    {
      sentence: "Kim | braucht | unbedingt | eine | neue | Lampe. | Das | Flackern | stört | beim | Lesen.",
      question: "Funktioniert Kims Lampe einwandfrei?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "training_lampe",
      participant_group: "A",
      participant_id: participantID,
      wordPos: 'same',
      underline: 'none'
    },
    {
      sentence: "Die | Person | neben | meiner | Schwester | in | der | Bahn | hat | einen | Döner | gegessen. | Der | Geruch | war | penetrant.",
      question: "Konnte man riechen, was die Person gegessen hat?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Ja",
      itemname: "training_doener",
      participant_group: "A",
      participant_id: participantID,
      wordPos: 'same',
      underline: 'none'
    }
  ],
  spr: [{
    sentence: "Alex | fährt | täglich | mit | dem | Bus | zum | Hauptbahnhof. | Den | Anschlusszug | bekommt | ".concat(pronouns.1name_hbf[coin],"  | leider | nicht | immer.",
    question: "Fährt Alex mehr als zwei Mal pro Monat mit dem Bus zum Hauptbahnhof?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: "1name_hbf",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Mit | Konny | bin | ich | gern | unterwegs. | Der | Grund | ist	| ganz | einfach: | .concat(pronouns.3name_kaugummi[coin]," | hat | immer | Kaugummis | dabei.",
    question: "Hat Konny selten Kaugummis dabei?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "3name_kaugummi",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Obwohl | wir | gut | befreundet | sind, | kommt | Kyo | selten | vorbei. | Vermutlich, | weil | .concat(pronouns.5name_allergie[coin]," | eine | starke | Katzenhaarallergie | hat.",
    question: "Ist Kyo allergisch gegen Hunde?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "5name_allergie",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Eben | ist | Ezra | an | mir | vorbeigelaufen, | ohne | mich | zu | begrüßen. | Kann | .concat(pronouns.7name_gruss[coin]," | nicht | aufmerksamer | sein?",
    question: "War Ezra mit dem Fahrrad unterwegs?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "7name_gruss",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Ich | kann | mit | Avery | einfach | nicht | zusammenarbeiten. | Was | mich | besonders | nervt: | .concat(pronouns.9name_arbeit[coin]," | schaut | nur | auf‘s | Handy!",
    question: "Ist die Zusammenarbeit mit Avery einfach?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "9name_arbeit",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Die | Person | neben | mir | im | Zug | liest | eine | Stellenbeschreibung. | Vermutlich | hat | .concat(pronouns.11person_bewerbung[coin]," | später | noch | ein | Bewerbungsgespräch.",
    question: "Liest die Person einen Flyer?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "11person_bewerbung",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Nach | mir | ist | nur | eine | weitere | Person | in | den | Bus | gestiegen. | .concat(pronouns.13person_bus[coin]," | ist | genau | wie | ich | an | der | letzten | Haltestelle | ausgestiegen.",
    question: "Sind mindestens zwei Personen an der letzten Haltestelle ausgestiegen?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: "13person_bus",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "In | meinem | Seminar | war | nur | eine | Person | ohne | eigenes | Referatsthema. | Dass | .concat(pronouns.15person_seminar[coin]," | sich | meiner | Gruppe | angeschlossen | hat, | war | für | mich | ok.",
    question: "Hatten alle Personen im Seminar von Beginn an ein Referatsthema?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "15person_seminar",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Es | wurde | eine | neue | Person | in | den | Gemeinderat | gewählt. | Gut | ist: | .concat(pronouns.17person_gemeinderat[coin]," | bringt | schon | politische | Vorerfahrung | mit.",
    question: "Hat das neue Mitglied im Gemeinderat politische Vorerfahrung?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: "17person_gemeinderat",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Mit | der | Person | da | drüben | versteht | sich | niemand | in | der | Hausgemeinschaft. | .concat(pronouns.19person_hausgemeinschaft[coin]," | soll | einfach | ausziehen, | das | wäre | am | besten.",
    question: "Verstehen sich alle gut mit der Person?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "19person_hausgemeinschaft",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Der | Mensch | an | der | Ampel | eben | hatte | denselben | Klingelton | wie | ich. | .concat(pronouns.21mensch_ampel[coin]," | war | ziemlich | überrascht, | als | ich | ebenfalls | nach | meinem | Handy | griff.",
    question: "Hat ein Handy geklingelt?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: "21mensch_ampel",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Die | Wahlaufsicht | hatte | nur | ein | Mensch. | Es | sah | aus, | als | sei | .concat(pronouns.23mensch_wahl[coin]," | heillos | überfordert | mit | all | den | Aufgaben.",
    question: "Hatte der Mensch nur eine einzige Aufgabe als Wahlhelfer?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "23mensch_wahl",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Der | Mensch | dort | gibt | sich | bei | der | schriftlichen | Prüfung | viel | Mühe. | .concat(pronouns.25mensch_examen[coin]," | ist | da | allerdings | keine | Ausnahme.",
    question: "War die Prüfung mündlich?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "25mensch_examen",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Der | Mensch | vor | mir | an | der | Kasse | hat | sich | Zeit | gelassen. | .concat(pronouns.27mensch_kasse[coin]," | ist | so | entspannt | - | so | wäre | ich | auch | gern.",
    question: "War der Mensch hektisch?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "27mensch_kasse",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Eben | hat | mich | ein | Mensch | von | der | Krankenkasse | angerufen. | Auch | wenn | .concat(pronouns.29mensch_krankenkasse[coin]," | nett | war, | war | mir | das | Gesprächsthema | unangenehm.",
    question: "War der Gesprächspartner unfreundlich?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "29mensch_krankenkasse",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
    }
  ],
  filler: [
    {
      sentence: "Miki | ist | genervt, | denn | die | Sicherung | ist | schon | wieder | rausgesprungen. | Und | sie | muss | den | Elektriker | anrufen.",
      question: "Ist Miki entspannt?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "filler_sicherung",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Der | Balkon | von | Taylors | Wohnung | ist | toll | bepflanzt. | Man | sieht, | dass | sie | einen | grünen | Daumen | hat.",
      question: "Geht es den Pflanzen auf Taylors Balkon gut?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Ja",
      itemname: "filler_balkon",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Mein | Handy | hat | plötzlich | geklingelt. | Als | ich | ranging | sagte | der | Mensch, | er | habe | sich | verwählt.",
      question: "Hat der Mensch sich beim Wählen vertan?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Ja",
      itemname: "filler_verwaehlt",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Blairs | Computer | ist | sehr | langsam. | Blair | ist | sich | sicher: | Vermutlich | gibt | er | bald | komplett | den | Geist | auf.",
      question: "Muss Blair vermutlich bald einen neuen Computer kaufen?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Ja",
      itemname: "filler_computer",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Ayumu | lernt | momentan | Gebärdensprache. | Der | letzte | Kurs | am | Institut | ist | für | sie | sehr | teuer | gewesen.",
      question: "Kostete der alte Kurs wenig Geld?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "filler_institut",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Maris | Fußballverein | ist | in | die | erste | Bundesliga | aufgestiegen. | Monate | vorher | hat | er | schon | darauf | gewettet.",
      question: "Geht es um einen Handballverein?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "filler_fussball",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Das | Schreiben | mit | der | Hand | strengt | die | Leute | immer | mehr | an. | Sie | sieht | das | anders, | sagt | Sue.",
      question: "Schreibt es sich per Hand einfacher?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "filler_handschrift",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Der | Tee | war | viel | zu | heiß. | Mein | Bruder | hat | sich | verbrannt, | er | ist | oft | sehr | ungeduldig.",
      question: "Hat sich der Bruder verletzt?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Ja",
      itemname: "filler_tee",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Mir | saß | eine | bunt | gekleidete | Person | gegenüber. | Ich | bin | mir | sicher: | Sie | arbeitet | am | Theater.",
      question: "War die Person dezent gekleidet?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "filler_theater",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Luka | hat | endlich | neue | Vorhänge | gekauft. | Sie | werden | heute | noch | aufgehängt. | Er | hat | extra | eine | Leiter | ausgeliehen.",
      question: "Hat Luka einen Rollladen gekauft?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "filler_vorhang",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Die | Person | da | drüben | trägt | eine | sehr | auffällige | Jacke. | Mir | scheint, | er | fühlt | sich | darin | nicht | ganz | wohl.",
      question: "Ist die Jacke der Person auffällig?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Ja",
      itemname: "filler_jacke",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },  
  {
      sentence: "Der | Garten | muss | dringend | gepflegt | werden. | Dafür | kommt | extra | ein | Gärtner. | Er | kennt | sich | mit | Pflanzen | aus.",
      question: "Ist der Garten bereits in einem guten Zustand?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "filler_garten",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Mit | dem | Menschen | am | Telefon | habe | ich | tatsächlich | relativ | wenig | gemeinsam. | Sie | interessiert | sich | nicht | für | meine | Belange.",
      question: "Ist der Mensch am Telefon interessiert?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "filler_telefon",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Der | Mensch, | der | sich | da | drüben | sonnt, | sollte | sich | schnell | eincremen. | Er | bekommt | sonst | Sonnenbrand.",
      question: "Ist es sonnig?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Ja",
      itemname: "filler_sonne",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Ich | nehme | an, | der | Mensch | im | blauen | Auto | hat | sich | verfahren, | si*er | kam | schon | drei | Mal | hier | vorbei.",
      question: "Ist das Auto grün? ",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "filler_auto",
      participant_group: "A",
      participant_id: participantID,
      condition: "BGP",
      wordPos: 'same',
      underline: 'none'
    }


]


};
