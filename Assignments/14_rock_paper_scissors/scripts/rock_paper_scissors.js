console.log('hello world');


$(document).ready(function(){

  var botPlay = 'Rock'
  var botPlay = 'Scissors'
  var botPlay = 'Paper'


//2. manually define the robot play for now and implement the conditional logic to assess win/tie/loss (a simple `console.log` stating the result will do for now)
        //
  var defineUserPlayValue = function(){
    //what option was clicked?
    var userChoice = event.target;
    var typePlay = $(userChoice).text();
    
    console.log(typePlay);
      //$('#humanchoice').text(typePlay);
  }

  function computerScore = function(){
    var options = event.target;
    var scoreboard = $(options).text();
    $('#options').text()
  }
//3. log the human and robot score incrementing it with each respective win (see similar example completed in Ice Cream assignment)
//4. implement true robot random play

//add my logic in as if bots respone will be rock. 
//dont worry about randomizaton yet
})
//listen for event on game options

    //rock is clicked
    //run randomization
    //print one of three options
    if(userPlay === 'Rock')
        //if
    //rock vs rock
    //tie game
    //change score
      if(botPlay = 'Rock') {
      document.getElementbyId('').innerHTML  
      console.log('You Tied')
    } 
      //else if
    //rock vs paper
    //rock loses
    else if(botPlay = 'Paper') {
      document.getElementbyId('').innerHTML  
      console.log('You Lose')
    }
    //else if 
    //rock vs scissors
    //rock wins
    else if(botPlay = 'Scissors') {
      document.getElementbyId('').innerHTML
      console.log('You Win')
    }
      //else if 
    //paper is clicked
    //run randomization
    //print one of three options
    if(userPlay === 'Paper')
      //if 
    //paper vs rock
    //paper wins
       if(botPlay = 'Rock') {
      document.getElementbyId('').innerHTML  
      console.log('You Win')
    } 
      //else if
    //paper vs paper
    //tie game
    //change score
    else if(botPlay = 'Paper') {
      document.getElementbyId('').innerHTML  
      console.log('You Tied')
    }
      //else if 
    //paper vs scissors
    //paper loses
    else if(botPlay = 'Scissors') {
      document.getElementbyId('').innerHTML
      console.log('I Win')
    }
      //else if
    //scissors is clicked
    //run randomization
    //print one of three options
    if(userPlay === 'scissors')
        //if
      //scissors vs rock
      //scissors loses
       if(botPlay === 'Rock') {
      document.getElementbyId('').innerHTML  
      console.log('You Lose')
    } 
        //else if 
      //scissors vs paper
      //scissors wins
    else if(botPlay === 'Paper') {
      document.getElementbyId('').innerHTML  
      console.log('You Win')
    }
       //else if
     //scissors vs scissors
     //tie game
    else if(botPlay === 'Scissors') {
      document.getElementbyId('').innerHTML
      console.log('You Tied')
    }
     //change score accordingly

//1. implement click listeners for user play (see similar example completed in Ice Cream assignment)
        //done


     $('#rock').click(defineUserPlayValue);
     $('##paper').click(defineUserPlayValue);
     $('#scissors').click(defineUserPlayValue);

  }