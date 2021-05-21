// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Vielen Dank für Ihre Teilnahme an unserem online-Leseexperiment. 
            <br />
            <br />
            Die Teilnahme am Experiment ist freiwillig. Sie können die Teilnahme jederzeit abbrechen, ohne negative Konsequenzen zu erwarten. 
            <br />
            <br />
            Ihre Antworten aus diesem Experiment werden ausschließlich zu wissenschaftlichen Zwecken aufgezeichnet und ausgewertet. Die Daten werden anonym gespeichert und können an andere Wissenschaftler*innen weitergegeben werden.
            <br />
            <br />Bei Fragen wenden Sie sich bitte an <a href="mailto:tatjana.scheffler@rub.de">Tatjana Scheffler</a>, Ruhr-Universität Bochum.
            <br />
            <br />Durch Ihre Teilnahme bestätigen Sie, dass Sie mit diesen Teilnahmebedingungen einverstanden sind.<br />
`,
    buttonText: 'Experiment beginnen',
    title: 'Willkommen!'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Aufgabenstellung',
  text: `Dieses Experiment besteht aus kurzen Texten, manchmal gefolgt von einer kurzen Verständnisfrage. Ihre Aufgabe ist es, die Sätze zu lesen und die dazugehörige Frage (wenn vorhanden) zu beantworten. <br><br>Die Sätze werden nicht auf einmal eingeblendet, sondern Sie können die Wörter einzeln mit der Leertaste anzeigen lassen. Sie können im Satz nicht mehr zurück gehen. <br><br>
         Bitte lesen Sie sich die Sätze aufmerksam aber <b>in Ihrer gewohnten Lese-Geschwindigkeit</b> durch und beantworten Sie die Fragen aufgrund Ihres intuitiven Verständnisses der Situation.<br><br>
Bitte beachten Sie, dass Sie das Experiment auf einem Computer mit Tastatur (nicht auf einem mobilen Gerät) durchführen sollten.<br>
`,
  buttonText: 'Start'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Weitere Informationen',
    text: 'Diese Angaben sind freiwillig, aber sie helfen uns bei der Analyse der Ergebnisse.<br/>Bitte klicken Sie zuletzt unbedingt unten auf "WEITER", da Ihre Daten sonst nicht gespeichert werden.',

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
   buttonText: 'Weiter',
  age_question: 'Alter',
  gender_question: 'Geschlecht',
   gender_male: 'männlich',
   gender_female: 'weiblich',
   gender_other: 'divers',
   edu_question: 'Höchster Bildungsabschluss',
   edu_graduated_high_school: 'kein Schulabschluss',
   edu_graduated_college: 'Schulabschluss',
   edu_higher_degree: 'Hochschulabschluss',
   languages_question: 'Muttersprache',
   languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
   comments_question: 'Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Vielen Dank für Ihre Teilnahme an unserem Experiment!',
  prolificConfirmText: 'Bitte Knopf drücken'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/





const spr_custom = function(config, CT, magpie, answer_container_generator, startingTime){

        const sentenceList = config.data[CT].sentence.trim().split(" | ");
        let spaceCounter = 0;
        let wordList;
        let readingTimes = [];
        // wordPos "next" or "same", if "next" words appear next to each other, if "same" all words appear at the same place
        // default: "next"
        let wordPos = config.data[CT].wordPos === undefined ? "next" : config.data[CT].wordPos;
        let showNeighbor = wordPos === "next";
        // underline "words", "sentence" or "none", if "words" every word gets underlined, if "sentence" the sentence gets
        // underlined, if "none" there is no underline
        // default: "words"
        let underline = config.data[CT].underline === undefined ? "words" : config.data[CT].underline;
        let not_underline = underline === "none";
        let one_line = underline === "sentence";

        // shows the sentence word by word on SPACE press
        const handle_key_press = function(e) {

            if (e.which === 32 && spaceCounter < sentenceList.length) {
                if (showNeighbor) {
                    wordList[spaceCounter].classList.remove("spr-word-hidden");
                } else {
                    $(".magpie-spr-sentence").html(`<span class='spr-word'>${sentenceList[spaceCounter]}</span>`);
                    if (not_underline){
                        $('.magpie-spr-sentence .spr-word').addClass('no-line');
                    }
                }

                if (spaceCounter === 0) {
                    $(".magpie-help-text").addClass("magpie-invisible");
                }

                if (spaceCounter > 0 && showNeighbor) {
                    wordList[spaceCounter - 1].classList.add("spr-word-hidden");
                }

                readingTimes.push(Date.now());
                spaceCounter++;
            } else if (e.which === 32 && spaceCounter === sentenceList.length) {
                if (showNeighbor) {
                    wordList[spaceCounter - 1].classList.add("spr-word-hidden");
                } else {
                    $(".magpie-spr-sentence").html("");
                }

                $(".magpie-view").append(answer_container_generator(config, CT));

		$("#next").on("click", function() {
                    const RT = Date.now() - startingTime;
                    let reactionTimes = readingTimes
                    .reduce((result, current, idx) => {
                        return result.concat(
                            readingTimes[idx + 1] - readingTimes[idx]
                        );
                    }, [])
                    .filter((item) => isNaN(item) === false);
                    let trial_data = {
                        trial_name: config.name,
                        trial_number: CT + 1,
                        reaction_times: reactionTimes,
                        time_spent: RT
                    };

                    trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                    magpie.trial_data.push(trial_data);
                    magpie.findNextView();
                });
                readingTimes.push(Date.now());
                spaceCounter++;
            }
        };
        // shows the help text
        $(".magpie-help-text").removeClass("magpie-nodisplay");

        if (showNeighbor) {
            // creates the sentence
            sentenceList.map((word) => {
                $(".magpie-spr-sentence").append(
                    `<span class='spr-word spr-word-hidden'>${word}</span>`
                );
            });

            // creates an array of spr word elements
            wordList = $(".spr-word").toArray();
        }

        if (not_underline){
            $('.magpie-spr-sentence .spr-word').addClass('no-line');
        }
        if (one_line){
            $('.magpie-spr-sentence .spr-word').addClass('one-line');
        }

        // attaches an eventListener to the body for space
        $("body").on("keydown", handle_key_press);

    }


var my_spr_response = function(config, CT, magpie, answer_container_generator, startingTime){

    if (config.data[CT].question === "") {
	spr_custom(config, CT, magpie, answer_container_generator, startingTime);
    } else {
	handle_response_functions.self_paced_reading(config, CT, magpie, answer_container_generator, startingTime);
    }  
}

var my_spr_answer_cont = function(config, CT){

    if (config.data[CT].question === "") {
	return `<button id="next" class='magpie-view-button' class="magpie-nodisplay">${
            config.button
            }</button>`
    } else {
	return `<div class='magpie-view-answer-container'>
                    <p class='magpie-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                    <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
                    <label for='o2' class='magpie-response-buttons'>${config.data[CT].option2}</label>
                </div>`;
    }  
}


// Create a first try-out self paced reading task (two items)
const spr_tryout = magpieViews.view_generator("self_paced_reading", {
    trials: trial_info.tryout.length,
    name: 'spr_tryout',
    data: trial_info.tryout},
    {
	stimulus_container_generator: stimulus_container_generators.self_paced_reading,
        answer_container_generator: my_spr_answer_cont,
        handle_response_function: my_spr_response
    })

// const spr_test = magpieViews.view_generator("self_paced_reading", {
//     trials: trial_info.spr.length,
//     name: 'spr_test',
//     data: _.shuffle(trial_info.spr)}, // random order
//     {
// 	stimulus_container_generator: stimulus_container_generators.self_paced_reading,
//         answer_container_generator:  my_spr_answer_cont, //answer_container_generators.button_choice,
//         handle_response_function: my_spr_response // handle_response_functions.self_paced_reading
//     })


const spr_test = magpieViews.view_generator("self_paced_reading", {
    trials: trial_info.spr.length + trial_info.filler.length,
    name: 'spr_test',
    data: _.shuffle(trial_info.spr.concat(trial_info.filler))}, // random order
    {
	stimulus_container_generator: stimulus_container_generators.self_paced_reading,
        answer_container_generator:  my_spr_answer_cont, //answer_container_generators.button_choice,
        handle_response_function: my_spr_response // handle_response_functions.self_paced_reading
    })


