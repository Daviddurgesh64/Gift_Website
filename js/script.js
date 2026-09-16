// JavaScript Logic - script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Year in Footer (So you never have to update it manually)
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Toggle Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 3. Strict Form Validation (Frontend Security)
    const form = document.getElementById('enquiry-form');
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');

    if (form) {
        form.addEventListener('submit', (e) => {
            // Get the phone number value and remove any spaces
            const phoneVal = phoneInput.value.trim();
            
            // Regex to check if it contains EXACTLY 10 digits and nothing else
            const phoneRegex = /^[0-9]{10}$/;

            if (!phoneRegex.test(phoneVal)) {
                // Prevent form from sending to server
                e.preventDefault(); 
                
                // Show error message and outline input in red
                phoneError.classList.remove('hidden');
                phoneInput.classList.add('border-red-500');
                phoneInput.focus();
            } else {
                // Hide error if validation passes
                phoneError.classList.add('hidden');
                phoneInput.classList.remove('border-red-500');
            }
        });

        // Hide error message dynamically when the user starts typing again
        phoneInput.addEventListener('input', () => {
            phoneError.classList.add('hidden');
            phoneInput.classList.remove('border-red-500');
        });
    }
});
