"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Nicolas Catlin
   Date: 04/24/2019
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/



  


  
  
  
/*=================================================================*/
window.onload = init;


function init() { // Define event listeners
	var stars = document.querySelectorAll("span#stars img"); // Store object collection of reviewing stars
	for (var i = 0; i < stars.length; i++) { // Loop for pointer style and lightStars event
		stars[i].style.cursor ="pointer";
		stars[i].addEventListener("mouseenter", lightStars);
	}
	document.getElementById("comment").addEventListener("keyup",updateCount); // Event listener for comment text area
}

function lightStars(e) { // Function to color star when user mouse over star image reflecting the rating of the book
	var starNumber = e.target.alt; // Store alt value into starNumber
	var stars = document.querySelectorAll("span#stars img"); // Store selector in a simple variable
	for (var i = 0; i < starNumber; i++) { // loop to add img to stars
		stars[i].src="bw_star2.png";
	}
	for (var i= starNumber; i < 5; i++) {
		stars[i].src = "bw_star.png";
	}
	document.getElementById("rating").value = starNumber + " stars"; // Adds text to star rating in conjuction to colored star
	e.target.addEventListener("mouseleave", turnOffStars);
	e.target.addEventListener("click",
		function() {
			e.target.removeEventListener("mouseleave", turnOffStars); // Removes colored stars when mouseover is not active
		}
		);
}


function turnOffStars() { // function purpose to unlight stars when not actively mouseover
	var stars= document.querySelectorAll("span#stars img"); // define stars
	for (var i = 0; i < 5; i++) { 
		stars[i].src = "bw_star.png"; // loop function to change src attribute
	}
	document.getElementById("rating").value = ""; // value of rating box to an empty string
}

function updateCount() { // function purpose to add running total of characters in text box
	var commentText = document.getElementById("comment").value; // Assigns comment to a variable
	var charCount = countCharacters(commentText); // Assigns number of characters to variable
	var wordCountBox = document.getElementById("wordCount"); // Assigns text box to a variable
	wordCountBox.value = charCount + "/1000"; // Declares value of wordCountBox equal to the charCount + 1000
	if (charCount > 1000) { // if else loop to define styling of text box
		wordCountBox.style.color = "white";
		wordCountBox.style.backgroundColor = "red";
	} else {
		wordCountBox.style.color = "black";
		wordCountBox.style.backgroundColor = "white";
	}
}

// Provided function containing regex
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   
	




































