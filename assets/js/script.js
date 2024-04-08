// Toggle class active untuk hamburger menu
const navLinks = document.querySelector('.nav-links');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navLinks.classList.toggle('active');
    e.preventDefault();
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Toggle class active untuk arrow aside
const asideBox = document.querySelector('.aside-box');
const asideIcon = document.getElementById('arrow-icon');
// ketika hamburger menu di klik
document.querySelector('#arrow-aside').onclick = (e) => {
    asideBox.classList.toggle('active');
    if(asideIcon.className === 'bx bxs-chevron-left-square') {
        asideIcon.className = 'bx bxs-chevron-right-square';
    } else {
        asideIcon.className = 'bx bxs-chevron-left-square';
    }
    e.preventDefault();
};

// klik di luar aside box untuk menghilangkan aside
const arrow = document.querySelector('#arrow-aside');

document.addEventListener('click', function (e) {
    if (!arrow.contains(e.target) && !asideBox.contains(e.target)) {
        asideBox.classList.remove('active');
        asideIcon.className = 'bx bxs-chevron-left-square';
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