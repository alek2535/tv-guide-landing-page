$(document).ready(function() {
    // LOGIC TO DYNAMICALLY GET TOMORROW'S DATE
    let date = new Date();
    // Set date to tomorrow
    date.setDate(date.getDate() + 1);
    // Subtract timezone offset to get correct date for tomorrow
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    let tomorrow = date.toISOString().slice(0, 10);

    // AJAX CALL TO API FOR TOMORROW'S TV SHOW SCHEDULE
    $.ajax({
        url: `https://api.tvmaze.com/schedule?country=US&date=${tomorrow}`,
        method: 'GET',
    })
    .then(function(response) {
        // LOGIC TO DYNAMICALLY CREATE TV SHOW SCHEDULE
        for (let i = 0; i < 24; i++) {
            $(`<a class="slider-image-link" href="#"><img src=${response[i].show.image.medium} alt="${response[i].show.name}" class="slider-image responsive" /></a.>`).appendTo('#show-slider');
        };

        // LOGIC TO CREATE SLIDER
        $('#show-slider').slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    });
});