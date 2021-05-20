$( document ).ready(function() {
    // click on question-block
    $('.question-block__title').click(function(){
        $(this).parent('.question-block').toggleClass('question-block_opened');
	});

    // change-tabs
    if ($('.tabs-block').length) {
        $('.tabs-block__navi .tabs-block__link').on('click', function() {
          $('.tabs-block__wrap .tabs-block__content').removeClass('tabs-block__content_active').eq($(this).index()).addClass('tabs-block__content_active');
          $('.tabs-block__navi .tabs-block__link').removeClass('tabs-block__link_active').eq($(this).index()).addClass('tabs-block__link_active');
          return false;
        });
    }

    // Recently Resolved carousel
    $('.recently-resolved__carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        rows: 0,
        variableWidth: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]
    });
});
