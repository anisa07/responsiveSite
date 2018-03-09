$(document).ready(function () {

    $(".authBtn").click(function () {
        $(this).next().slideToggle();
    });
    $(".menuPlace__menuBtn").click(function () {
        $(".menuPlace__mainMenu ul").slideToggle();
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoHeight: true
    });

    $(".next_button").click(function () {
        owl.trigger("next.owl.carousel");
    });
    $(".prev_button").click(function () {
        owl.trigger("prev.owl.carousel");
    });

});