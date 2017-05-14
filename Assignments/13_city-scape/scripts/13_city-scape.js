    //psuedo code//
// when form is sumitted
//red entered city
//chekc if supported
//update background to supported city
//else
//alert "city is not supporterd"

//hey jquery go find me the document and when it is ready
//go do something
$(document).ready(function(){
  //execute the whole code
  console.log('JS is loading');
  //where do I implement the $.val() to reset the attribute of the first match?
  var city;

  $('#city-picker').submit(function() {
    console.log('form was submitted');
    console.log(event);
    //tell the browser not to run the default behaviour
    //for the form submit
  event.preventDefault();

    // read the contents of input#city-type
    // save those contents to var city
  var cityName = $('#city-type').val();
      //change to lowercase to simplify logi and address typing inconsistencies 
  cityName = cityName.toLowerCase();
  console.log(cityName);

  var existingBodyClasses = $('body').attr('class');
  $('body').removeClass('existingBodyClasses');

  switch (cityName) {
    case 'sf':
     $('body').addClass('sf');
      break;
    case 'nyc':
     $('body').addClass('nyc');
      break;
    case 'la':
     $('body').addClass('la');
      break;
    case 'austin':
     $('body').addClass('austin');
      break;
    case undefined:
      alert('City is not defined');
    default:
      alert('City is not supported');

  }
});
});

//    if(cityName === 'sf' || cityName ==='san francisco' || cityName ==='san fran'){
  //    $('body').addClass('sf');
   // }
   // else if(cityName === 'nyc' || cityName ==='new york city' || cityName ==='new york'){
    // $('body').addClass('nyc');
   // }
  //  else if(cityName === 'austin'){
  //    $('body').addClass('austin');
   // }  
   // else if(cityName === 'la' || cityName === 'los angeles') {
  //   $('body').addClass('la');
  //  }
   // else if(cityName === 'syd' || cityName ==='sydney'){
   //  $('body').addClass('sydney');
   // }

   // else{
    //  alert('city is not supported');
   // }

// });






// $('input[type-text').keyup(function() {
 //   city = $(this).val();
//