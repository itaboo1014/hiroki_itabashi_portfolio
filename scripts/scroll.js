$(function () {
    $('a[href^="#"]').click(function () {
        var time = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html,body").animate({ scrollTop: position }, time, "swing");
        return false;
    });
});