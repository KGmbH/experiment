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
    sentence: "Alex | fährt | täglich | mit | dem | Bus | zum | Hauptbahnhof. | Den | Anschlusszug | bekommt | si*er | leider | nicht | immer.",
    question: "Fährt Alex mehr als zwei Mal pro Monat mit dem Bus zum Hauptbahnhof?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: "name_hbf",
    participant_group: "A",
    participant_id: participantID,
    condition: "word",
    wordPos: 'same',
    underline: 'none'
  },
  {
    sentence: "Mit | Konny | bin | ich | gern | unterwegs. | Si*er | hat | immer | Kaugummis | dabei.",
    question: "Hat Konny selten Kaugummis dabei?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: 'name_kaugummi',
    participant_group: "A",
    participant_id: participantID,
    condition: "match",
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
    condition: "BGP"
  },
  {
    sentence: "Eben | ist | Ezra | an | mir | vorbeigelaufen, | ohne | mich | zu | begrüßen. | Scheinbar | hatte | si*er | es | eilig.",
    question: "War Ezra mit dem Fahrrad unterwegs?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: 'name_vorbei',
    participant_group: "A",
    participant_id: participantID,
    condition: "homo",
    wordPos: 'same',
    underline: 'none'
  },
  {
    sentence: "Die | Person | neben | mir | im | Zug | liest | angestrengt | eine | Stellenbeschreibung. | si*er | hat | wohl | später | noch | ein | Bewerbungsgespräch.",
    question: "Liest die Person einen Flyer?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: 'person_bahn',
    participant_group: "A",
    participant_id: participantID,
    condition: "match",
    wordPos: 'same',
    underline: 'none'
  },
  {
    sentence: "Nach | mir | ist | nur | eine | weitere | Person | in | den | Bus | gestiegen. | Ausgestiegen | ist | si*er | genau | wie | ich | an | der | letzten | Haltestelle.",
    question: "Sind mindestens zwei Personen an der letzten Haltestelle ausgestiegen?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: 'person_bus',
    participant_group: "A",
    participant_id: participantID,
    condition: "word",
    wordPos: 'same',
    underline: 'none'
  },
  {
    sentence: "In | meinem | Seminar | war | nur | eine | Person | ohne | Referatsthema. | Für | mich | war | ok, | dass | si*er | sich | meiner | Gruppe | angeschlossen | hat.",
    question: "Hatten alle Personen im Seminar von Beginn an ein Referatsthema?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: 'person_seminar',
    participant_group: "A",
    participant_id: participantID,
    condition: "word",
    wordPos: 'same',
    underline: 'none'
  },
  {
    sentence: "Der | Mensch | an | der | Ampel | eben | hatte | denselben | Klingelton | wie | ich. | Si*er | war | ziemlich | überrascht, | als | ich | ebenfalls | nach | meinem | Handy | griff.",
    question: "Hat ein Handy geklingelt?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: 'mensch_ampel',
    participant_group: "A",
    participant_id: participantID,
    condition: "homo",
    wordPos: 'same',
    underline: 'none'
  },
  {
    sentence: "Die | Wahlaufsicht | hatte | nur | ein | Mensch. | Es | sah | aus, | als | sei | si*er | heillos | überfordert | mit | all | den | Aufgaben.",
    question: "Hatte der Mensch nur eine einzige Aufgabe als Wahlhelfer?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: 'mensch_wahl',
    participant_group: "A",
    participant_id: participantID,
    condition: "word",
    wordPos: 'same',
    underline: 'none'
  },
  {
    sentence: "Der | Mensch | drei | Reihen | vor | mir | versuchte, | bei | der | schriftlichen | Prüfung | gut | abzuschneiden. | Da | war | si*er | allerdings | keine | Ausnahme.",
    question: "War die Prüfung mündlich?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: 'mensch_test',
    participant_group: "A",
    participant_id: participantID,
    condition: "word",
    wordPos: 'same',
    underline: 'none'
    }
  ],
  filler: [{
    sentence: "Polly | hört | nicht | auf | zu | Maunzen. | Scheinbar | ist | ihr | Futternapf | leer.",
    question: "Wurde Polly kürzlich gefüttert?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: 'filler_polly',
    participant_group: coin,
    participant_id: participantID,
    wordPos: 'same',
    underline: 'none'
  },
  {
    sentence: "Miki | ist | genervt. | Die | Sicherung | ist | schon | wieder | rausgesprungen.",
    itemname: 'filler_sicherung',
    participant_group: coin,
    participant_id: participantID,
    wordPos: 'same',
    underline: 'none'
  },
  {
    sentence: "Der | Fahrradreifen | läuft | nicht | rund. | Vielleicht | ist | die | Felge | verbogen.",
    question: "Ist das Fahrrad vermutlich kaputt?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: 'filler_fahrrad',
    participant_group: coin,
    participant_id: participantID,
    wordPos: 'same',
    underline: 'none'
  }


]


};
