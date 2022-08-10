$(document).ready(function() {
    let tomorrow = moment().add(1,'days').format('YYYY-MM-DD');

    $.ajax({
        url: `https://api.tvmaze.com/schedule?country=US&date=${tomorrow}`,
        method: 'GET',
    })
    .then(function(response) {
        console.log(response);
        
        for (let i = 0; i < 24; i++) {
            $(`<img src=${response[i].show.image.medium} class="slider-image" />`).appendTo('#show-slider');
        }

        $('#show-slider').slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 6,
        });
    })
});