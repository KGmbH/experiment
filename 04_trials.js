const trial_info = {
  tryout: [ // trial items - dienen nur der Übung
    {
      sentence: "Die | Katze | jagt | eine | kleine | schwarze | Maus. | Eigentlich | will | die | Katze | nur | spielen, | schließlich | ist | sie | noch | satt | vom | Abendessen.",
      question: "Ist die Maus grau?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "training_katze",
      participant_group: coin,
      participant_id: participantID,
      condition: "training",
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
      participant_group: coin,
      participant_id: participantID,
      condition: "training",
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
      participant_group: coin,
      participant_id: participantID,
      condition: "training",
      wordPos: 'same',
      underline: 'none'
    }
  ],
  spr: [{
    sentence: "Alex | fährt | täglich | mit | dem | Bus | zum | Hauptbahnhof. | Den | Anschlusszug | bekommt | ".concat(pronouns.name_hbf_1[coin],"  | leider | nicht | immer."),
    question: "Fährt Alex mehr als zwei Mal pro Monat mit dem Bus zum Hauptbahnhof?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: "name_hbf_1",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
    },
    {
      sentence: "Mit | Konny | bin | ich | gern | unterwegs. | Der | Grund | ist	| ganz | einfach: | ".concat(pronouns.name_kaugummi_3[coin]," | hat | immer | Kaugummis | dabei."),
      question: "Hat Konny selten Kaugummis dabei?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "name_kaugummi_3",
      participant_group: coin,
      participant_id: participantID,
      condition: "A_GNP",
      wordPos: 'same',
      underline: 'none'
    },
    {
      sentence: "Obwohl | wir | gut | befreundet | sind, | kommt | Kyo | selten | vorbei. | Vermutlich, | weil | ".concat(pronouns.name_allergie_5[coin]," | eine | starke | Katzenhaarallergie | hat."),
      question: "Ist Kyo allergisch gegen Hunde?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "name_allergie_5",
      participant_group: coin,
      participant_id: participantID,
      condition: "A_GNP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Eben | ist | Ezra | an | mir | vorbeigelaufen, | ohne | mich | zu | begrüßen. | Kann | ".concat(pronouns.name_gruss_7[coin]," | nicht | aufmerksamer | sein?"),
      question: "War Ezra mit dem Fahrrad unterwegs?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "name_gruss_7",
      participant_group: coin,
      participant_id: participantID,
      condition: "A_GNP",
      wordPos: 'same',
      underline: 'none'
    },
  {
      sentence: "Ich | kann | mit | Avery | einfach | nicht | zusammenarbeiten. | Was | mich | besonders | nervt: | ".concat(pronouns.name_arbeit_9[coin]," | schaut | nur | auf‘s | Handy!"),
      question: "Ist die Zusammenarbeit mit Avery einfach?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "name_arbeit_9",
      participant_group: coin,
      participant_id: participantID,
      condition: "A_GNP",
      wordPos: 'same',
      underline: 'none'
    },
    {  
    sentence: "Die | Person | neben | mir | im | Zug | liest | eine | Stellenbeschreibung. | Vermutlich | hat | ".concat(pronouns.person_bewerbung_11[coin]," | später | noch | ein | Bewerbungsgespräch."),
    question: "Liest die Person einen Flyer?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "person_bewerbung_11",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Nach | mir | ist | nur | eine | weitere | Person | in | den | Bus | gestiegen. | ".concat(pronouns.person_bus_13[coin]," | ist | genau | wie | ich | an | der | letzten | Haltestelle | ausgestiegen."),
    question: "Sind mindestens zwei Personen an der letzten Haltestelle ausgestiegen?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: "person_bus_13",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "In | meinem | Seminar | war | nur | eine | Person | ohne | eigenes | Referatsthema. | Dass | ".concat(pronouns.person_seminar_15[coin]," | sich | meiner | Gruppe | angeschlossen | hat, | war | für | mich | ok."),
    question: "Hatten alle Personen im Seminar von Beginn an ein Referatsthema?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "person_seminar_15",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Es | wurde | eine | neue | Person | in | den | Gemeinderat | gewählt. | Gut | ist: | ".concat(pronouns.person_gemeinderat_17[coin]," | bringt | schon | politische | Vorerfahrung | mit."),
    question: "Hat das neue Mitglied im Gemeinderat politische Vorerfahrung?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Ja",
    itemname: "person_gemeinderat_17",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  },
{
    sentence: "Mit | der | Person | da | drüben | versteht | sich | niemand | in | der | Hausgemeinschaft. | ".concat(pronouns.person_hausgemeinschaft_19[coin]," | soll | einfach | ausziehen, | das | wäre | am | besten."),
    question: "Verstehen sich alle gut mit der Person?",
    option1: "Ja",
    option2: "Nein",
    correct_answer: "Nein",
    itemname: "person_hausgemeinschaft_19",
    participant_group: coin,
    participant_id: participantID,
    condition: "A_GNP",
    wordPos: 'same',
    underline: 'none'
  }
  ],
  filler: [
    {
      sentence: "Miki | ist | genervt, | denn | die | Sicherung | ist | schon | wieder | rausgesprungen. | Und | ".concat(pronouns.name_sicherung_2[coin]," | muss | den | Elektriker | anrufen."),
      question: "Ist Miki entspannt?",
      option1: "Ja",
      option2: "Nein",
      correct_answer: "Nein",
      itemname: "name_sicherung_2",
      participant_group: coin,
      participant_id: participantID,
      condition: "B_GNP",
      wordPos: 'same',
      underline: 'none'
    }


]


};
