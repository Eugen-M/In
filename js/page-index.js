$( document ).ready(function() {
    // In news carousel
    $('.in-news__carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: false,
        rows: 0,
        variableWidth: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true
                }
            }
        ]
    });

    // Resolved complaints carousel
    $('.resolved-complaints__carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: false,
        rows: 0,
        variableWidth: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true
                }
            }
        ]
    });

    // Consumer Complaints and Review first carousel
    $('.consumer-block__f-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        centerMode: true,
        rows: 0,
        variableWidth: true,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4
                }
            },{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            }
        ]
    });

    // Consumer Complaints and Review second carousel
    $('.consumer-block__s-carousel').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        centerMode: false,
        rows: 0,
        variableWidth: true,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3
                }
            },{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
