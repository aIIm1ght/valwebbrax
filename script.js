$(function () {
  $(".card").draggable();

  $("#yesButton").click(function () {
    $("#popup-card").removeClass("hidden"); // Show the card by removing 'hidden' class
  });

  // Existing code for draggable cards and "No" button hover functionality
});

$("#noButton").hover(function () {
  const card = $(this).closest(".card");
  const cardWidth = card.outerWidth();
  const cardHeight = card.outerHeight();

  const buttonWidth = $(this).outerWidth();
  const buttonHeight = $(this).outerHeight();

  const maxX = cardWidth - buttonWidth;
  const maxY = cardHeight - buttonHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  $(this).css({
    position: "absolute",
    left: newX + "px",
    top: newY + "px",
  });
});
