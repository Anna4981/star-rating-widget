star-rating-widget

An interactive star rating component built with HTML5, CSS3 and JavaScript. Users can click a star to select a rating from 1 to 5.

Built as Task 19 (Level 1, Day 19) of the Web Development track.

Objective

Practice DOM events, dynamic class toggling and simple UI state.

Features
5 clickable stars
Hover preview effect
Selected rating stored in state
Display of the current rating
Reset button to clear the rating
Tools Used
HTML5
CSS3
JavaScript (vanilla)
Project Structure
star-rating-widget/
├── index.html   # Markup: the 5 star buttons, rating text and reset button
├── style.css    # Styling for the card, stars, hover and filled states
└── script.js    # State, event listeners and rendering logic
How It Works
Each star is a <button> with a data-value attribute (1 to 5) that stores its value.
The state is kept in a simple object with two separate values:
state.hover is the temporary preview while the mouse is over a star.
state.rating is the selected rating, saved when a star is clicked.
A render() function toggles the hovered and filled classes with classList.toggle() based on the state, and updates the text display.
The Reset button sets both values back to 0 and re-renders.
How to Run
Clone or download this repository.
Make sure index.html, style.css and script.js are in the same folder.
Open index.html in your browser.
Author

Anna Makgabo Thantsha# star-rating-widget
