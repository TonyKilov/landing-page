$(document).ready(function()
{
	$('.head-btn-menu').click(function()
	{
		$('.head-menu-hide').addClass('open'); 
	});

	$('.head-menu-close').click(function()
	{
		$('.head-menu-hide').removeClass('open'); 
	});


	$('.btn-close-block').click(function(e)
	{
		$(e.target).parents('.our-image-item').hide();
	});

});