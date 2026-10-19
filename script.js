// UI state: the selected rating is kept separate from the hover preview
const state = {
  rating: 0,   // committed by a click
  hover: 0     // temporary, only while the mouse is over a star
};

const starsContainer = document.getElementById("stars");
const stars = document.querySelectorAll(".star");
const display = document.getElementById("display");
const resetBtn = document.getElementById("reset");

const labels = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];

// Re-draw the stars from the current state
function render() {
  stars.forEach((star) => {
    const value = Number(star.dataset.value); // read from data-value

    star.classList.toggle("filled", value <= state.rating);
    star.classList.toggle("hovered", state.hover > 0 && value <= state.hover);
    star.setAttribute("aria-checked", value === state.rating ? "true" : "false");
  });

  display.textContent = state.rating
    ? `Current rating: ${state.rating} / 5 (${labels[state.rating]})`
    : "No rating yet";
}

// Events (delegated on the container)
starsContainer.addEventListener("mouseover", (e) => {
  const star = e.target.closest(".star");
  if (!star) return;
  state.hover = Number(star.dataset.value);
  render();
});

starsContainer.addEventListener("mouseleave", () => {
  state.hover = 0;
  render();
});

starsContainer.addEventListener("click", (e) => {
  const star = e.target.closest(".star");
  if (!star) return;
  state.rating = Number(star.dataset.value);
  render();
});

resetBtn.addEventListener("click", () => {
  state.rating = 0;
  state.hover = 0;
  render();
});

render();