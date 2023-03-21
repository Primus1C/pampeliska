/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function () {
    if ($(window).scrollTop() >= 134) {
        $("nav").addClass("fixed-header");
        $("nav div").addClass("visible-title");
        $("nav img").attr("src", "./images/logo2.jpg");
    } else {
        $("nav").removeClass("fixed-header");
        $("nav div").removeClass("visible-title");
        $("nav img").attr("src", "./images/logo1.jpg");
    }
});
