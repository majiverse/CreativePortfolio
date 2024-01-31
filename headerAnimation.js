document.addEventListener("DOMContentLoaded", function() {
    // Animation for navbar brand
    const navbarBrand = document.querySelector('.navbar-brand');
    navbarBrand.addEventListener('mouseover', function() {
        this.style.color = '#B91646'; // Change color on hover
    });
    navbarBrand.addEventListener('mouseout', function() {
        this.style.color = ''; // Revert to original color on mouseout
    });

    // Animation for navbar links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('mouseover', function() {
            this.style.color = '#B91646'; // Change color on hover
        });
        navLink.addEventListener('mouseout', function() {
            this.style.color = ''; // Revert to original color on mouseout
        });
    });
});

const photo = document.querySelector('.animated-photo');
    anime({
        targets: photo,
        opacity: 0.5, // Set opacity to 50%
        duration: 1000, // Duration of animation in milliseconds
        loop: true, // Repeat the animation infinitely
        direction: 'alternate', // Reverse the animation after each iteration
        easing: 'easeInOutQuad' // Easing function
    });

// Get the photo element
const image = document.getElementById('animatedPhoto');

// Add event listener for mouse enter
photo.addEventListener('mouseenter', () => {
    // Add the pop animation class
    photo.classList.add('pop-animation');
});

// Add event listener for mouse leave
photo.addEventListener('mouseleave', () => {
    // Remove the pop animation class after a delay
    setTimeout(() => {
        photo.classList.remove('pop-animation');
    }, 300); // Adjust this delay to match the transition duration
});



