//jQuery Show,Hide,Toggle

// .show()

//Psuedocode:
//when i click the show button, hide the image
$("button#hide").click(function() {
  $("img").hide();
});

// .hide()

//Psuedocode:
//when i click the hide button, show the image
$("button#show").click(function () {
  $("img").show();
});

// .toggle()

//Psuedocode:
//when i click the toggle button, hide or show  the image depending on it's display
$("#toggleImg").click(function () {
  $("img").toggle();
});

//(if the display for the element is already listed as hidden in the css, we can use jQuery show method and it changes the display to block, as a INLINE STYLE!!! Remember this can cause problems and make it behave differently.)
//-----------------------------------------------------------------------------

// .toggleClass

$("h1").click(function () {
  $("body").toggleClass("bg-danger text-light");
  $("h1").toggleClass("animated rotateOut");
  $("button").toggleClass("bg-light border")
});

//to switch between two styles (turn one off and another on), set the class name already in the html and put it in the toggle class method as well


//-----------------------------------------------------------------------------

































//-----------------------------------------------------------------------------
