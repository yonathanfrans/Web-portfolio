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

// button read more
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('read-more-btn')) {
        toggleReadMore(true);
    } else if (e.target.classList.contains('read-less-btn')) {
        toggleReadMore(false);
    }
});

function toggleReadMore(isReadMore) {
    const moreContent = document.querySelector('.more-content');
    const readMoreBtn = document.querySelector('.read-more-btn');
    const readLessBtn = document.querySelector('.read-less-btn');

    if (isReadMore) {
        moreContent.style.display = 'inline';
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'inline';
    } else {
        moreContent.style.display = 'none';
        readMoreBtn.style.display = 'inline';
        readLessBtn.style.display = 'none';
    }
}

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