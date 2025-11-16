$(document).ready(function () {

    // Open modal with fade-in
    $("#openModal").click(function () {
        $("#modal").fadeIn(300);
    });

    // Close modal with fade-out
    $("#closeModal").click(function () {
        $("#modal").fadeOut(300);
    });

    // Slide toggle animation
    $("#toggleBox").click(function () {
        $("#box").slideToggle(400);
    });

    // Highlight selected section
    $(".section").click(function () {
        $(".section").removeClass("highlight");  // remove previous highlight
        $(this).addClass("highlight");           // highlight current section

        // Small jQuery animation for feedback
        $(this).hide().fadeIn(400);
    });

});
