document.addEventListener("DOMContentLoaded", function() {
    //Hamburger Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    if (menuBtn && mainNav) {
        menuBtn.onclick = function() {
            mainNav.classList.toggle('show');
            if (mainNav.classList.contains('show')) {
                this.textContent = '✖';
            } else {
                this.textContent = '☰';
            }
        };
    }

    //Interactive Course Selection Logic
    const selectButtons = document.querySelectorAll('.select-btn');
    const courseCards = document.querySelectorAll('.course-card');
    const selectionBanner = document.getElementById('selection-banner');

    // Add click event listeners to all program selection buttons
    for (let i = 0; i < selectButtons.length; i++) {
        selectButtons[i].onclick = function () {
            
            // Reset active highlight states from all cards and buttons
            for (const card of courseCards) {
                card.classList.remove('highlight-active');
            }
            for (const btn of selectButtons) {
                btn.classList.remove('btn-selected');
            }
            
            // Highlight the currently selected program card and button
            if (courseCards[i]) {
                courseCards[i].classList.add('highlight-active');
            }
            selectButtons[i].classList.add('btn-selected');
            
            // Retrieve selected course metadata from button data attributes
            const courseName = this.getAttribute('data-course-name');
            const courseCode = this.getAttribute('data-course-code');
            
            // Update notification banner text and scroll it smoothly into view
            if (selectionBanner) {
                selectionBanner.textContent = `Success! You have selected: ${courseName} (${courseCode})`;
                selectionBanner.classList.add('show');
                selectionBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };
    }

});