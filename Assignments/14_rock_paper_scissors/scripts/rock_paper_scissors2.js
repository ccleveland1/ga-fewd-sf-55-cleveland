    // only execute code when DO is ready
//
//listen for a click on the game options
//get the value of the user play
// 
// computer plays randomly(???)
//
//complare user play with bot play
    //update the scoreboard 
    //log detailes of play
//
//1. implement click listeners to figure out user play
//2. hard-code computer play (i.e manually define "random" play)
//3. implement the game logic
//4. console.log the results
//5. update the play status and scoreboard
//6. implement random computer play
//  
//

var humanScore = 0;
var botScore = 0;
var botPlay;

var botPlayRandomiser = function() {
  var randomBotPlay = Math.floor(Math.random()*3+1);

  if(randomBotPlay === 1) {
    botPlay = 'rock';
  } else if (randomBotPlay === 2) {
    botPlay = 'paper';
  } else {
    botPlay = 'scissors';
  }
}

// This function is responsible for updating the scoreboard
// and updating the details of the play
var scoreKeeper = function (winner, userOption, botOption) {
  if (winner === 'human') {
    result = 'win';
    humanScore = humanScore + 1;
  } else if (winner === 'bot') {
    result = 'lose';
     botScore = botScore + 1;
  } else {
    result = 'tie';
  }
  // "You played {userPlay}. the bot played{botPlay}. you win/lose
  //update the scoreboard
  $('#status').text('You played ' + userOption + '. The bot played ' + botOption +  '. You ' + result + '.');
  
  $('#humanScore').text(humanScore);
  $('#botScore').text(botScore);
}
//update the scoreboard


//change score accordingly

// Listen for user click on game options
$('#options li').click(function (){

  // Figure out which option the user clicked on
  var userChoice = event.target;
  // Save the user play
  var userPlay = $(userChoice).text().toLowerCase();

  // Execute the bot play randomiser function
  botPlayRandomiser();
    
  console.log('userPlay is: ' + userPlay);
  console.log('botPlay is: ' + botPlay);

  // game logic
  switch (userPlay) {
    case botPlay:
      // userPlay is equal  to botPlay
      scoreKeeper('tie', userPlay, botPlay);
      break;
    case 'rock':
      if (botPlay === 'paper'){
        scoreKeeper('bot', userPlay, botPlay);
      } else{
        //bot picked scissor
        scoreKeeper('human', userPlay, botPlay);
      }
      break;
    case 'paper':
      if (botPlay === 'scissors'){
        scoreKeeper('bot', userPlay, botPlay);
      } else{
        //bot picked rock
        scoreKeeper('human', userPlay, botPlay);
      }
      break;
    case 'scissors':
      if (botPlay === 'rock'){
        scoreKeeper('bot', userPlay, botPlay);
      } else{
        //bot picked paper
        scoreKeeper('human', userPlay, botPlay);
      }
    break;
  }
});
