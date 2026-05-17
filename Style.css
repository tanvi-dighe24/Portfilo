/**
 * Role Animation Script for Tanvi Dighe's Portfolio
 * Handles typing and erasing animation of professional roles.
 */

const roles = [
    "Full Stack Developer",
    "Data Analyst",
    "Python Programmer",
    "AI Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const roleElement = document.getElementById("role-text");

// Typing speeds
const typingSpeed = 100;
const deletingSpeed = 60;
const pauseTime = 2000;

function typeEffect() {

    // Safety check
    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        // Typing text
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
        } else {
            setTimeout(typeEffect, typingSpeed);
        }

    } else {

        // Deleting text
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, deletingSpeed);
        }
    }
}

// Start animation after page loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});
