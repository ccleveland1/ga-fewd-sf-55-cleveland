////psuedo code
//user enters city name
//listen for the submit
//when user clicks submit
/// change body background accordingly
//when user enters city name
  //listen for the submit then
    //clear background and change body background accordingly

function toggleGray() {
  $('body').css('background-color', 'gray');
  $('body').css('color', 'white');
}
function toggleWhite() {
  $('body').css('background-color', 'white');
  $('body').css('color', 'black');
}

$().click(toggleSF);
$().click(toggleNYC);
$().click(toggleAUSTIN);
$().click(toggleLA);
$().click(toggleSYDNEY);



