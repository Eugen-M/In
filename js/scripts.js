$( document ).ready(function() {
    // click on header burger
    $('.page-header__btn').click(function(){
        $(this).toggleClass('page-header__btn_opened');
		$('.page-header__mob-dropdown').toggleClass('page-header__mob-dropdown_opened');
        $('.page-header__overlay').toggleClass('page-header__overlay_active');
        $("body").toggleClass('overflow-hidden');
        $('.page-header__search').removeClass('page-header__search_opened');
	});

    // click on header overlay
    $('.page-header__overlay, .page-header__search-btn').click(function(){
        $('.page-header__btn').removeClass('page-header__btn_opened');
		$('.page-header__mob-dropdown').removeClass('page-header__mob-dropdown_opened');
        $('.page-header__overlay').removeClass('page-header__overlay_active');
        $("body").removeClass('overflow-hidden');
	});

    // click on search btn
    $('.page-header__search-btn').click(function(){
        $(this).parent('.page-header__search').toggleClass('page-header__search_opened');
        $('.page-header__search-input').focus();
	});

    $(document).mouseup(function(e) {
        let div = $(".page-header__search");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            div.removeClass('page-header__search_opened');
        }

        let userDropdown = $(".page-header__user");
        if (!userDropdown.is(e.target) &&
            userDropdown.has(e.target).length === 0) {
            userDropdown.removeClass('page-header__user_opened');
        }
    });

    // click on user icon and name
    $('.page-header__user-row').click(function(){
        $(this).parent('.page-header__user').toggleClass('page-header__user_opened');
	});

    // click on mobile user icon and name
    $('.page-header__menu-box').click(function(){
        $(this).parent('.page-header__menu-item').toggleClass('page-header__menu-item_opened');
	});
});
