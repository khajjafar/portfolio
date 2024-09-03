// Function to toggle the menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Function to close the menu
function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
}

// Close the menu when clicking outside of it or on the menu toggle button
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-icon');

    // Check if the click was outside the menu and the menu toggle button
    if (!menu.contains(e.target) && !menuToggle.contains(e.target) || menu.contains(e.target)) {
        closeMenu();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.image-item');
    let delay = 0;

    // Add delay to each image-item
    items.forEach((item) => {
        item.style.animationDelay = `${delay}s`;
        delay += 0.2; // Increase delay for each item
    });

    // Intersection Observer to trigger the fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once the animation has started
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    // Observe each image-item
    items.forEach((item) => {
        observer.observe(item);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Variables to keep track of clicks
    let clickCount = 0;
    const gifContainer = document.getElementById("gifContainer");
    const liElement = document.getElementById("hiddenButton");
    const closeButton = document.getElementById("closeButton");

    // Event listener for clicks on the <li> element
    liElement.addEventListener("click", function () {
        event.preventDefault(); // Prevents the default action (if any) for the <a> tag
        clickCount++;
        // Check if clicked 5 times
        if (clickCount === 5) {
            // Show the GIF
            gifContainer.style.display = "block";
        }
    });

    closeButton.addEventListener("click", function () {
        gifContainer.style.display = "none";
        clickCount = 0;
    });
});



