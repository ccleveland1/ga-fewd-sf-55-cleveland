

$(document).ready(function(){

  var botPlay = 'Rock'
  var botPlay = 'Scissors'
  var botPlay = 'Paper'
  
    var botPlay = function() {
      //what option was clicked?
    var pickedOption = event.target;
    var optionText = $(pickedOption).text();
    $('#scoreboard').text(optionText);
    }

    if(userPlay === 'Rock')

    if(botPlay = 'Rock') {
      document.getElementbyId('').innerHTML  
      console.log('You Tied')
    } 
    else if(botPlay = 'Paper') {
      document.getElementbyId('').innerHTML  
      console.log('You Lose')
    }
    else if(botPlay = 'Scissors') {
      document.getElementbyId('').innerHTML
      console.log('You Win')
    }

    if(userPlay === 'Paper')

       if(botPlay = 'Rock') {
      document.getElementbyId('').innerHTML  
      console.log('You Win')
    } 
    else if(botPlay = 'Paper') {
      document.getElementbyId('').innerHTML  
      console.log('You Tied')
    }
    else if(botPlay = 'Scissors') {
      document.getElementbyId('').innerHTML
      console.log('I Win')
    }
    if(userPlay === 'scissors')

       if(botPlay = 'Rock') {
      document.getElementbyId('').innerHTML  
      console.log('You Lose')
    } 
    else if(botPlay = 'Paper') {
      document.getElementbyId('').innerHTML  
      console.log('You Win')
    }
    else if(botPlay = 'Scissors') {
      document.getElementbyId('').innerHTML
      console.log('You Tied')
    }
     //change score accordingly

//1. implement click listeners for user play (see similar example completed in Ice Cream assignment)
        //done
     $('#rock').click(botPlay);
     $('##paper').click(botPlay);
     $('#scissors').click(botPlay);

}
     