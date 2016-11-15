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


	$('.btn-close-block').click(function()
	{
		$(this).parents('.our-image-item').hide();

		$(this).parents('.our-image-row').find('.our-image-item').addClass('wdt');
	});

});