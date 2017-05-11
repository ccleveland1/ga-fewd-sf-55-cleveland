// Define a function makeCone.
// It should accept two parameters, flavor and numberScoops.

// The function should take the parameters and log the following to the console: "Coming right up! One {flavor} ice cream cone with {numberScoops} scoops."

// Hint: You'll want to use string concatenation (+) to combine the variables with the human-readable text when logging the message to the console.

// Now, call that function, passing in "chocolate" and 3 as the arguments.

// You should see the following messages:

// "Coming right up!"
// "Flavor: chocolate"
// "Scoops: 3"
  

  //on click flavor
  //show that flavor in order details
  //on click # of scoops 
  //show that flavor in number of scoops 
  var setFlavor = function() {
      //what flavor was clicked?
    var pickedFlavor = event.target;
    var flavorText = $(pickedFlavor).text();
    $('#picked-flavor').text(flavorText);
  }


 $('#flavor li').click(setFlavor);
  

  var setScoops = function() {
    var pickedScoop = event.target;
    var scoopText = $(pickedScoop).text();
    $('#scoop-flavor').text(scoopText);

  }


 $('#flavor li').click(setFlavor);
  
 $('#scoops li').click(setScoops);


 






  // makeCone function definition







  //makeCone function call
  //passing arugments 'chocolate' and 3
  //that correspond to the 'flavor' and 'numberScoops'


 
  //var flavor
  //var numScoops
  //onclick flavor
    //set flavor
  //onclick scoops
    //set numScoops
  //find order details placehodler
    //update contents with flavor+scoops
