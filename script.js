/**
 * Role Animation Script for Tanvi Dighe's Portfolio
 * Handles the "typing" and "erasing" flow of professional titles.
 */

const roles = [
    "Full Stack Developer",
    "Data Analyst",
    "Python Programmer",
    "AI Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isErasing = false;
const roleElement = document.getElementById("role-text");

// Speed settings (in milliseconds)
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetweenRoles = 2000; // How long the text stays visible

function type() {
    const currentRole = roles[roleIndex];

    if (!isErasing) {
        // Typing state
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isErasing = true;
            setTimeout(type, delayBetweenRoles);
        } else {
            setTimeout(type, typingSpeed);
        }
    } else {
        // Erasing state
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isErasing = false;
            roleIndex = (roleIndex + 1) % roles.length; // Loop back to start
            setTimeout(type, 500); // Small pause before typing next role
        } else {
            setTimeout(type, erasingSpeed);
        }
    }
}

// Start the animation once the page has loaded
document.addEventListener("DOMContentLoaded", () => {
    // 1 second delay at the very start for a "premium" feel
    setTimeout(type, 1000);
});