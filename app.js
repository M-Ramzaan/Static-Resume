"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Function to toggle visibility
    function toggleSection(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Toggle visibility and scrolling
            if (targetElement.classList.contains("hidden")) {
                targetElement.classList.remove("hidden");
                targetElement.style.maxHeight = targetElement.scrollHeight + "px";
                targetElement.style.opacity = "1";
            }
            else {
                targetElement.classList.add("hidden");
                targetElement.style.maxHeight = "0";
                targetElement.style.opacity = "0";
            }
        }
    }
    // Add event listeners to toggle buttons
    const toggleButtons = document.querySelectorAll(".toggle-button");
    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            if (targetId) {
                toggleSection(targetId);
            }
        });
    });
});
