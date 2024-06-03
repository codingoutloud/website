document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Implement keyboard navigation for the navigation menu links
    document.addEventListener('keydown', (e) => {
        const navLinks = document.querySelectorAll('nav a');
        const focusedElement = document.activeElement;
        const focusedIndex = Array.from(navLinks).indexOf(focusedElement);
        let targetElement;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                targetElement = navLinks[focusedIndex + 1] || navLinks[0];
                targetElement.focus();
                break;
            case 'ArrowUp':
                e.preventDefault();
                targetElement = navLinks[focusedIndex - 1] || navLinks[navLinks.length - 1];
                targetElement.focus();
                break;
        }
    });
});
