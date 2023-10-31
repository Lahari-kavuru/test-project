// Get a reference to the dropdown content element
var dropdownContent = document.getElementById("myDropdownContent");

// Add a click event listener to the icon to toggle the dropdown
document.querySelector(".dropbtn i").addEventListener("click", function() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn i")) {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    }
});

const button = document.getElementById('most_visited_places_button');

button.addEventListener('click', () => {
  window.location.href = 'favourites.html'; 
});
