$( document ).ready(function() {
    $('.page-header__btn').click(function(){
        $(this).toggleClass('page-header__btn_opened');
		$('.page-header__mob-dropdown').toggleClass('page-header__mob-dropdown_opened');
	});
});
