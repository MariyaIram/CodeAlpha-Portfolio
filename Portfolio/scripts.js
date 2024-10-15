// Scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Show project details (popup/modal simulation)
function showProjectDetails(project) {
    let details = {
        'medicine': 'This system connects unused medicines to people in need. It helps reduce waste and provides medical aid to those in need.',
        'event': 'An Event Management System for efficient task and schedule management for event organizers.'
    };
    alert(details[project]);
}

// Scroll-to-top button functionality
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.innerHTML = '⬆';
document.body.appendChild(scrollTopBtn);

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
