$('document').ready(function() {

  $('#add-todo').click(function(){
    event.preventDefault();

    var newTodoItem = $('#new-todo');

    var newTodo = newTodoItem.val();

    newTodoItem.val('');

    console.log('New Todo is: ' + newTodo);

    // // Approach 1: Insert element using HTML string
    // var newElement = '<li><label><input type="checkbox"><span>'+ newTodo + '</span><br></label></li>';
    // $('#todos').append(newElement);

    // Approach 2: Insert element by cloning template
    var newElement = $('#template').clone();

    newElement.attr('id','');

    newElement.find('span').text(newTodo);

    newElement.appendTo('#todos');
  })
// on click clear button
    // preventDefault()
    // find all checkek items
   
    $('#clear').click(function(){
      event.preventDefault();
      $('#todos :checked').each(function() {
        $(this).closest('li').remove();
     });
    });
});
  


