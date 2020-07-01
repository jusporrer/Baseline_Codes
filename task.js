function task(nbBlocks, nbTrials)
{
      /////////////////////////////
      ////// INITIALISATION //////
      ////////////////////////////

      var timelineTask = [];

      /////////////////////////////////
      ////// Start of the Block //////
      ////////////////////////////////

      for (var block = 0; block < nbBlocks; block++)  {

            // Put here the parameters that need to be randomised every block

            /////////////////////////////////
            ////// Start of the trial //////
            ////////////////////////////////

            for(var trial = 0; trial < nbTrials; trial++){

                  var fixation = {
                        type:'html-keyboard-response',
                        stimulus: '<div style="font-size:75px;">+</div>',
                        choices: jsPsych.NO_KEYS,
                        trial_duration: fixation_time,
                        data:{
                              test_part:'fixation',
                              blockNb: block,
                              trialNb: trial,
                        }
                  };

                  timelineTask.push(fixation);
                  timelineTask.push(fullscreenExp);

            } // End of the trials
      } // End of the blocks

      return timelineTask;
} // end of the function
