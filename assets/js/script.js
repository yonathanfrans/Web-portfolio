// Toggle class active untuk hamburger menu
const navLinks = document.querySelector('.nav-links');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navLinks.classList.toggle('active');
    // e.stopPropagation();
};

// klik di luar sidebar untuk menghilangkan nav

document.addEventListener('click', function (e) {
    const hamburger = document.querySelector('#hamburger-menu');
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// fitur dark mode
const darkIcon = document.getElementById('dark-icon');
const body = document.body;

document.querySelector('#dark-toggle').onclick = (e) => {
    body.classList.toggle('dark-mode');
    if(darkIcon.className === 'bx bxs-moon') {
        darkIcon.className = 'bx bxs-sun';
    } else {
        darkIcon.className = 'bx bxs-moon';
    }
};