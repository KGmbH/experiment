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
