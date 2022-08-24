// In this file you initialize and configure your experiment using magpieInit

//$("document").ready(function() { // change by Tatjana Scheffler to preload images on index.html
$(window).on("load", function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,
            instructions,
	    spr_tryout,
        spr_test1,
        spr_pic3,
        spr_test2,
        spr_pic2,
        spr_test3,
            post_test_customized,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "7",
            serverAppURL: "https://thrifty-narrow-sugarglider.gigalixirapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            //deployMethod: "debug", //"directLink", //
            deployMethod: "directLink",
            contact_email: "Hannah.Seemann@rub.de"//,
//            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
		spr_tryout.name,
		spr_test1.name,
        spr_test2.name,
        spr_test3.name,
        //spr_pic1.name,
        spr_pic2.name,
        spr_pic3.name
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "default",
            width: 100
        }
    });
});
