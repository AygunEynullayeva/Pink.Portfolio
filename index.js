$(document).ready(function() {
    $(".menu-icon").click(function() {
        $("header").toggle();
        $(".menu-icon").css("display", "none");
    });
    $(".close-icon").click(function(){
        $(".menu-icon").toggle();
        $("header").css("display", "none");
    });
});
$(document).ready(function () {
    // Show the header when a list item is clicked
    $('header li').click(function () {
        // Toggle the header's visibility
        $('header').toggle();
        $(".menu-icon").css("display", "block");
    });
});