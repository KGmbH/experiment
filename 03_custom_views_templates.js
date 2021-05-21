// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

// spr_custom: function(config, CT) {
//         const helpText = config.data[CT].help_text !== undefined ?
//             config.data[CT].help_text : "Press the SPACE bar to reveal the words";
//         return `<div class='magpie-view'>
//                     <h1 class='magpie-view-title'>${config.title}</h1>
//                     <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD}</p>
//                     <div class='magpie-view-stimulus-container'>
//                         <div class='magpie-view-stimulus magpie-nodisplay'></div>
//                     </div>
//                     <p class='magpie-help-text magpie-nodisplay'>${helpText}</p>
//                     <p class='magpie-spr-sentence'></p>
//                 </div>`;
//     }

const post_test_customized = magpieViews.view_generator(
    "post_test",
    // config information
    {
        trials: 1,
        name: 'post_test',
  title: 'Weitere Informationen',
    text: 'Diese Angaben sind komplett freiwillig, helfen mir allerdings bei der Auswertung der Ergebnisse. Bitte klicken Sie zuletzt unbedingt unten auf "WEITER", da Ihre Daten sonst nicht gespeichert werden.',

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
   comments_question: 'Kommentare zum Experiment'
},
    // custom generator functions
    {
        stimulus_container_generator: stimulus_container_generators.post_test,
	answer_container_generator: function(config, CT) {
        const quest = magpieUtils.view.fill_defaults_post_test(config);
        return `<form>
                    <p class='magpie-view-text'>
                     <label for="emoji">Wie ist Ihre Einstellung in Bezug auf geschlechtergerechte Sprache?</label>
                     <select id="gender" name="gender">
                            <option></option>
                            <option value="keine">Ich habe keine Einstellung dazu.</option>
                            <option value="furchtbar">Ich finde geschlechtergerechte Sprache furchtbar.</option>
                            <option value="manchmal">manchmal</option>
                            <option value="häufig">häufig</option>
                            <option value="beinahe immer">beinahe immer</option>
                        </select>
                    <p class='magpie-view-text'>
                        <label for="age">${quest.age.title}:</label>
                        <input type="number" name="age" min="10" max="110" id="age" />
                    </p>
                    <p class='magpie-view-text'>
                        <label for="gender">${quest.gender.title}:</label>
                        <select id="gender" name="gender">
                            <option></option>
                            <option value="${quest.gender.male}">${quest.gender.male}</option>
                            <option value="${quest.gender.female}">${quest.gender.female}</option>
                            <option value="${quest.gender.other}">${quest.gender.other}</option>
                        </select>
                    </p>
                    <p class='magpie-view-text'>
                        <label for="education">${quest.edu.title}:</label>
                        <select id="education" name="education">
                            <option></option>
                            <option value="${quest.edu.graduated_high_school}">${quest.edu.graduated_high_school}</option>
                            <option value="${quest.edu.graduated_college}">${quest.edu.graduated_college}</option>
                            <option value="${quest.edu.higher_degree}">${quest.edu.higher_degree}</option>
                        </select>
                    </p>
                    <p class='magpie-view-text'>
                        <label for="languages" name="languages">${quest.langs.title}:<br /><span>${quest.langs.text}</</span></label>
                        <input type="text" id="languages"/>
                    </p>
                    <p class="magpie-view-text">
                        <label for="comments">${quest.comments.title}</label>
                        <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
                    </p>
                    <button id="next" class='magpie-view-button'>${config.button}</button>
            </form>`},
	handle_response_function: function(config, CT, magpie, answer_container_generator, startingTime) {
            $(".magpie-view").append(answer_container_generator(config, CT));

            $("#next").on("click", function(e) {
		// prevents the form from submitting
		e.preventDefault();

		// records the post test info
		magpie.global_data.emoji = $("#emoji").val();
		magpie.global_data.age = $("#age").val();
		magpie.global_data.gender = $("#gender").val();
		magpie.global_data.education = $("#education").val();
		magpie.global_data.languages = $("#languages").val();
		magpie.global_data.comments = $("#comments")
		    .val()
		    .trim();
		magpie.global_data.endTime = Date.now();
		magpie.global_data.timeSpent =
                    (magpie.global_data.endTime -
                     magpie.global_data.startTime) /
                    60000;

		// moves to the next view
		magpie.findNextView();
            });
	}
    }	     
);

