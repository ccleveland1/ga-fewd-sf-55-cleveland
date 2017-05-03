// alert('Hello World');

function toggleGray() {
  $('body').addClass('dark-theme');
}

function toggleWhite() {
  $('body').removeClass('dark-theme');
}

$('#grayButton').click(toggleGray);
$('#whiteButton').click(toggleWhite);
