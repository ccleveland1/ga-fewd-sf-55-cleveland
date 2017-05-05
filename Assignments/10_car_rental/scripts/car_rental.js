var currentYear = 2017;
var name = prompt('Please Enter Your Full Name');
var yob = prompt('Please Enter Your Year of Birth');


$('#salutation').text('Hello ' + name);

var age = currentYear - yob;
var rentalMessage;


if(age >= 25) {
  rentalMessage = 'Happy rental';
} else if(age < 25 && age >= 21) {  
   rentalMessage = 'Additional Charge';
} else {
   rentalMessage = 'Sorry, you are not eligible for car rental.';
}

$('#message').text(rentalMessage);