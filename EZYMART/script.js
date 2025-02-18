// Display a dynamic greeting based on the time of day
window.onload = function () {
    var greetingElement = document.getElementById("greeting");
    var currentHour = new Date().getHours();
    
    if (currentHour < 12) {
        greetingElement.textContent = "Good Morning! Start your day with great deals.";
    } else if (currentHour < 18) {
        greetingElement.textContent = "Good Afternoon! Find your favorite products.";
    } else {
        greetingElement.textContent = "Good Evening! Relax and shop with ease.";
    }
}

// Smooth Scroll Effect for Navigation Links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Modal Open and Close Functions
const modal = document.getElementById("newsletter-modal");
const openModalButtons = document.querySelectorAll(".open-modal");
const closeModalButton = document.querySelector(".close");

openModalButtons.forEach(button => {
    button.addEventListener("click", function () {
        modal.style.display = "block";
    });
});

closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
});

function closeModal() {
    modal.style.display = "none";
}

// Handle Newsletter Subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    
    if (email) {
        alert("Thank you for subscribing to our newsletter!");
        document.getElementById("email").value = ""; // Clear the input field
        closeModal(); // Close the modal
    } else {
        alert("Please enter a valid email address.");
    }
}

// Alert on "Shop Now" button click
function showAlert() {
    alert("Thanks for visiting EzyMart! Start shopping now!");
}
