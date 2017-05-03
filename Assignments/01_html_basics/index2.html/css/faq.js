function showAnswer1() {
  $('#answer1').slideToggle();
}
function showAnswer2() {
  $('#answer2').slideToggle();
}
function showAnswer3() {
  $('#answer3').slideToggle();
}
function showbackground1() {
  $('#showbackground1').changebackground();
}
function showbackground2() {
  $('#showbackground2').changebackground();
}

 // $('answer1').hide();
 // $('answer2').hide();
 // $('answer3').hide();

$('.answer1').hide()

$('#question1').click(showAnswer1);
$('#question2').click(showAnswer2);
$('#question3').click(showAnswer3);

$('#greyButton').click(showbackground1).css('background-color', 'grey');
$('#whiteButton').click(showbackground2);

