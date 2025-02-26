$(document).ready(function () {
    let lastScrollTop = 0;
    const navbar = $('.navbar');

    $(window).scroll(function () {
        let currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.css('background-color', '#333'); // Set solid color before sliding up
            navbar.slideUp(200, function () {
                navbar.css('background-color', 'transparent'); // Make background transparent after sliding up
            });
        } else {
            // Scrolling up
            navbar.css('background-color', '#333'); // Set solid color before sliding down
            navbar.slideDown(200, function () {
                navbar.css('background-color', 'transparent'); // Ensure background is transparent after slide down
            });
        }

        lastScrollTop = currentScroll;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "designer"; // Text to be typed
    const animatedText = document.getElementById("animated-text");
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting) {
            if (index < text.length) {
                animatedText.textContent += text.charAt(index); // Add next letter
                index++;
                animatedText.style.width = (animatedText.textContent.length * 15) + 'px'; // Adjust width dynamically
                setTimeout(typeWriter, 100); // Faster typing speed (100ms per letter)
            } else {
                isDeleting = true; // Start deleting after typing
                setTimeout(typeWriter, 1000); // Shorter wait time before deleting
            }
        } else {
            if (index > 0) {
                animatedText.textContent = text.substring(0, index - 1); // Remove last letter
                index--;
                animatedText.style.width = (animatedText.textContent.length * 15) + 'px'; // Adjust width dynamically
                setTimeout(typeWriter, 50); // Faster deleting speed (50ms per letter)
            } else {
                isDeleting = false; // Start typing again
                setTimeout(typeWriter, 1000); // Shorter wait time before typing again
            }
        }
    }

    typeWriter(); // Start the typing effect
});


