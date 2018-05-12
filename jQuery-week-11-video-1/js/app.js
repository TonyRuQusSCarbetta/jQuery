// jQuery basic syntax
// 1. Target/what are we selectiong?
//2. Method()/what are we doing?
//3.Anonymous Iife inside the method
//example:
$(document).ready(function() {

  function() {
    //do stuff
  }
  //or another example:
  $("div").hide();

});

//-----------------------------------------------------------------------------

//SELECTOR TYPES

//Element Selector
$("button");
//Class Selector
$("box");
// Id Selector
$("#myId");

//CSS Selectors work EXACTLY the same way/we can be as specific as we want when selecting elements
// $(div .btn, span);

// this keyword Selector
$(this);

// we can store selectors in variable
var box = $("box");

//-----------------------------------------------------------------------------

//Using jQuery perform this psuedo code:
//when i click on Any element with a class "box", do stuff.
$("box").click(function() {
  //does stuff
});

//Using Vanilla JavaScript do the same thing:
//when i click on Any element with a class "box", do stuff.
var boxes = document.getElementsByClassName("box");
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    //does stuff
  })
}

//-----------------------------------------------------------------------------

//lets break this code down...
var boxes = document.getElementsByClassName("box");
// the variable boxes returns ALL classes named box in an array, which looks like this,
// [div.box, div.box, div.box]
//However, the PROBLEM is,... in Vanilla JS we cannot add an event listener for a click event on an array, because an array is not the appropriate data type.

//Therefore, we must loop through the array and add a click event listener to each item/box in the array
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    //does stuff
  })
}

//-----------------------------------------------------------------------------
