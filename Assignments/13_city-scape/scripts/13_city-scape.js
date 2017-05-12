    //psuedo code//
// when form is sumitted
//red entered city
//chekc if supported
//update background to supported city
//else
//alert "city is not supporterd"


//where do I implement the $.val() to reset the attribute of the first match?
var city
var cityName


else if(city === 'SF' || city ==='San Francisco' || city ==='San Fran'){
  $('body').addClass('SF');
}
else if(city === 'NYC' || city ==='New York City ' || city ==='New York'){
  $('body').addClass('NYC');
}
else if(city === 'Austin'){
  $('body').addClass('AUSTIN');
}  
else if(city === 'LA' || city=== 'la' || city === 'Los Angeles') {
  $('body').addClass('LA');
  }
else if(city === 'SYD' || city ==='Sydney'){
  $('body').addClass('SYDNEY');
}

else{
  alert('city is not supported');
}





