//jQuery EVENT & THIS
//TO GET THE HTML PAGE WORKING COMMENT ALL CODE IN THIS FILE OUT EXCEPT FOR LINES 41-60!

//vanilla JS event listener looks like this
document.querySelector("h1").addEventListener("click", function() {
  //does stuff
});

//jQuery click event listener looks like this
$("h1").click(function () {
    //does stuff
});

//Most other event listenters need the .on method
//  the .css method becomes a method literal when using more than one css change
$("h1").on("mouseenter," function() {
    $("h1").css(
      {
      "background-color": "orange",
      "color": "white",
      "text-transform": "uppercase"
    });
});

// typically .css looks like this instead
$("h1").on("mouseenter," function() {
    $("h1").css(
      {"background-color": "orange", "color": "white", "text-transform": "uppercase"});
});
// Pay Attention to the QUOTES on both the property AND the value in the css!
//-----------------------------------------------------------------------------

//change Css on hover
$("h1").hover(function() {
    $("h1").css(
      {"background-color": "orange", "color": "white", "text-transform": "uppercase"});
});
//-----------------------------------------------------------------------------
//change css on hover AND revert to normal when you hover off
//to do this we need the hover method to take TWO arguements!
$("img").hover(function() {
    $("h1").css(
      {"background-color": "orange", "color": "white", "text-transform": "uppercase"});
},
function() {
  $("h1").css({"background-color": "", "color": "", "text-transform": ""});

});
//pay attention to the syntax here,  once the first function closes we are staying within the parentheses of the hover method when writing the second function arguement.. also add a comma after the first arguement.
//the second arguement/function has an empty value for the css properties, this SECOND FUNCTION is called a "CALL BACK FUNCTION"
//-----------------------------------------------------------------------------
//Now we use the same concept with the KEYWORD `THIS`.
//in this example the keyword this refers to li and will only change ONE particular li that is being hovered over.
$('li').hover(function() {
  $(this).css(
    {"background-color": "blue", "color": "white", "text-transform": "uppercase"});
  },
  function() {
  $(this).css({"background-color": "", "color": "", "text-transform": ""});
});































//-----------------------------------------------------------------------------
