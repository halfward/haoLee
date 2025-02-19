// Smooth nav link------------------------------------------
document.querySelectorAll('h2').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'
            });
        }
    });
});

document.querySelectorAll('h1').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'
            });
        }
    });
});







// Get all the chapter sections and their corresponding h2 elements
const chapters = document.querySelectorAll('.chapter');
const navLinks = document.querySelectorAll('header h2');

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const chapter = entry.target;
        const navLink = document.querySelector(`h2[href="#${chapter.id}"]`);

        if (entry.isIntersecting) {
            // Add 'active' class to the corresponding h2 when the chapter is visible
            navLink.classList.add('active');
        } else {
            // Remove 'active' class when the chapter is not visible
            navLink.classList.remove('active');
        }
    });
}, {
    threshold: 0.3  // The chapter is considered visible when 30% of it is in the viewport
});

// Observe each chapter
chapters.forEach(chapter => {
    observer.observe(chapter);
});
