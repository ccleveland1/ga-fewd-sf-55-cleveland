// Define a function makeCone.
// It should accept two parameters, flavor and numberScoops.

// The function should take the parameters and log the following to the console: "Coming right up! One {flavor} ice cream cone with {numberScoops} scoops."

// Hint: You'll want to use string concatenation (+) to combine the variables with the human-readable text when logging the message to the console.

// Now, call that function, passing in "chocolate" and 3 as the arguments.

// You should see the following messages:

// "Coming right up!"
// "Flavor: chocolate"
// "Scoops: 3"


  // makeCone function definition



function vanilla() {
  $('#yourflavor').text('Vanilla');
}
function chocolate() {
  $('#yourflavor').text('Chocolate');
}
function strawberry() {
  $('#yourflavor').text('Strawberry');
}
function neopolitan() {
  $('#yourflavor').text('Neopolitan');
}

function numScoop1() {
  $('#yourscoops').text('With 1' + ' Scoop ');
}

function numScoop2() {
  $('#yourscoops').text('With 2' + ' Scoops ');
}

function numScoop3() {
  $('#yourscoops').text('With 3' + ' Scoops ');
}



  //makeCone function call
  //passing arugments 'chocolate' and 3
  //that correspond to the 'flavor' and 'numberScoops'

$('#flavor1').click(vanilla);
$('#flavor2').click(chocolate);
$('#flavor3').click(strawberry);
$('#flavor4').click(neopolitan);

$('#scoop1').click(numScoop1);
$('#scoop2').click(numScoop2);
$('#scoop3').click(numScoop3);


 
  //var flavor
  //var numScoops
  //onclick flavor
    //set flavor
  //onclick scoops
    //set numScoops
  //find order details placehodler
    //update contents with flavor+scoops
