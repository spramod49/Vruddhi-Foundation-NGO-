alert("Hello");
$("#v").click(function() {
    $('html, body').animate({
        scrollTop: $("#vision").offset().top
    }, 1000);
});
