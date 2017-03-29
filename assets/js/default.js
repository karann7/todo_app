//Relying on Jquery for this project.
// Strike out the lists by clicking.
$( 'ul' ).on("click", "li", (function() {
	$(this).toggleClass('completed');
}));
//Click X to delete icon
$( 'ul' ).on('click', 'span', (function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
}));
//Saves input from the text field and makes a list out of it.

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
  	var todoText = $(this).val();
  	$(this).val("");
  	//create a new li and add to ul
  	$('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> '+todoText+'</li>');
	}
});
$( '.fa-plus' ).click(function() {
$("input[type='text']").fadeToggle();
});