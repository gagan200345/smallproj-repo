
// Select elements
const statusText = document.querySelector(".card-subtitle");
const btn = document.querySelector("#add");

// Toggle variable
let isFriend = false;

// Add click event
btn.addEventListener("click", function () {
  if (!isFriend) {
    statusText.textContent = "Friend";
    statusText.style.color = "green";
    btn.textContent = "Remove Friend";
    isFriend = true;
  } else {
    statusText.textContent = "Stranger";
    statusText.style.color = "red";
    btn.textContent = "Add Friend";
    isFriend = false;
  }
});
