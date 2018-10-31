function checkScroll() {
  var startY = $(".header-wrap").height() * 1; //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $(".header-wrap").addClass("scrolled");
  } else {
    $(".header-wrap").removeClass("scrolled");
  }
}

if ($(".header-wrap").length > 0) {
  $(window).on("scroll load resize", function() {
    checkScroll();
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("modal-ctrl")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
