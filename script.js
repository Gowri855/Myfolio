/* ---------------- Menu and Navbar Toggle Section Start ---------------- */

// Selecting elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

/* ---------------- Active Navigation on Scroll Section Start ---------------- */

// Selecting sections and navigation links
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Scroll event for updating active link based on current section
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Highlight active link when section is in view
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document
                    .querySelector('header nav a[href*=' + id + ' ]')
                    .classList.add('active');
            });
        }
    });
};

/* ---------------- Active Navigation on Scroll Section End ---------------- */

/* ---------------- Menu Icon Click Event Section Start ---------------- */

// Toggle menu icon and navbar visibility on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ---------------- Menu Icon Click Event Section End ---------------- */

/* ---------------- Menu and Navbar Toggle Section End ---------------- */

