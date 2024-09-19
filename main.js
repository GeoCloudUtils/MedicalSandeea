$(document).ready(function () {
  $(".show-more-btn").click(function () {
    // Get the target container ID from the data attribute
    var targetContainer = $(this).data("target");

    // Show all hidden portfolio items within the target container
    $(targetContainer + " .portfolio-item.d-none").removeClass("d-none");

    // Optionally hide the button after clicking
    $(this).hide();
  });
});
