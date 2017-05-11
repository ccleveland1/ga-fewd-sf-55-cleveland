

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
