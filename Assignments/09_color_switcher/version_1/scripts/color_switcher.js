// alert('Hello World');

function toggleGray() {
  $('body').css('background-color', 'gray');
  $('body').css('color', 'white');
}
function toggleWhite() {
  $('body').css('background-color', 'white');
  $('body').css('color', 'black');
}

$('#grayButton').click(toggleGray);
$('#whiteButton').click(toggleWhite);

