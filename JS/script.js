// jquery ui
$(function () {
    $("#tabs").tabs();
});

// 交換下拉選單
$(window).scroll(function () {
    var h = $(window).height() - 600;
    if ($(this).scrollTop() < h) {
        $('#food_1').css("animation-name", "none");
        $('#food_2').css("animation-name", "none");
    }
    if ($(this).scrollTop() > h) {
        $('#food_1').css("animation-name", "food_1")
        $('#food_2').css("animation-name", "food_2")
    }
    $('.dropdown-menu,.navbar-collapse').css({
        "top": $(this).scrollTop() == 0 ? 'auto' : '100%',
        "bottom": $(this).scrollTop() == 0 ? '100%' : 'auto'
    });
});



// lightbox
lightbox.option({
    'wrapAround': true
})