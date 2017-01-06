$(document).ready(function(){
	

$(document).on('click', '.dropdown_child', function(){

if( $(this).attr('data-isshown') == "false" ){
	$(this).attr('data-isshown', "true"); 
	$(this).find('ul').show();
} else {
	$(this).attr('data-isshown', "false"); 
	$(this).find('ul').hide();
}

	
});	
	
});