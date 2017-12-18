
        $(document).ready(function() {
            
            // creates a random number for the targetscore in the html document
			var targetScore = Math.floor(Math.random() * (120 -19)) +19;
			$(".targetScoreText").html(targetScore);
            
            //setting up a random number for each jewel 
			var randomNumber1 = Math.floor(Math.random() *(12 -1)) + 1;
			var randomNumber2 = Math.floor(Math.random() *(12 -1)) + 1;
			var randomNumber3 = Math.floor(Math.random() *(12 -1)) + 1;
			var randomNumber4 = Math.floor(Math.random() *(12 -1)) + 1;
            
            //setting up the count for wins/losses
			var wins = 0;
			var losses = 0;
			var totalScore = 0;

			// setting the wins and losses within the html
			function reset (){
			$("#win").html(wins);
			$("#lose").html(losses);
            
            // resetting the game
			targetScore = Math.floor(Math.random() * (120 -19)) +19;
			$(".targetScoreText").html(targetScore);
			randomNumber1 = Math.floor(Math.random() *(12 -1)) + 1;
			randomNumber2 = Math.floor(Math.random() *(12 -1)) + 1;
			randomNumber3 = Math.floor(Math.random() *(12 -1)) + 1;
			randomNumber4 = Math.floor(Math.random() *(12 -1)) + 1;
			totalScore = 0;
			$("#guessedScore").html(totalScore);
			}
            
            // functions to update my wins and losses
			function win() {
				alert("Check you out!");
				wins++;
				$("#win").html(wins);
			}

			function lose() {
				alert("You kinda suck bro....");
				losses++;
				$("#lose").html(losses);
			}

			//sets the on click function for my crystals
			$("#blueCrystal").on("click", function() {
				totalScore = totalScore + randomNumber1;
				$("#guessedScore").html(totalScore);
				if (targetScore===totalScore) {
					win ();
				}	
				else if ( totalScore > targetScore) {
					lose ();
				}

			})

			$("#greenCrystal").on("click", function() {
				totalScore = totalScore + randomNumber2;
				$("#guessedScore").html(totalScore);
				if (targetScore===totalScore) {
					win ();
				}	
				else if ( totalScore > targetScore) {
					lose ();
				}

			})

			$("#redCrystal").on("click", function() {
				totalScore = totalScore + randomNumber3;
				$("#guessedScore").html(totalScore);
				if (targetScore===totalScore) {
					win ();
				}	
				else if ( totalScore > targetScore) {
					lose ();
				}

			})

			$("#yellowCrystal").on("click", function() {
				totalScore = totalScore + randomNumber4;
				$("#guessedScore").html(totalScore);
				if (targetScore===totalScore) {
					win ();
				}	
				else if ( totalScore > targetScore) {
					lose ();
				}

			});

			$("#newGame").on("click", function() {
				reset ();
			})
		});
