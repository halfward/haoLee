// Link opens new tab
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
});

// Banner hue change
document.addEventListener('mousemove', (e) => {
    const intro = document.getElementById('intro');
    const y = e.clientY; // vertical position
    const windowHeight = window.innerHeight;
    const hue = (y / windowHeight) * 360; // map to 0–360 degrees
    intro.style.filter = `hue-rotate(${hue}deg)`;
});



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
const header = document.querySelector('#header');

// Define a fixed height for transition
const headerMaxHeight = '200px'; // Adjust based on your content height

// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const chapter = entry.target;
        const navLink = document.querySelector(`h2[href="#${chapter.id}"]`);

        if (entry.isIntersecting) {
            // Add 'active' class to the corresponding h2 when the chapter is visible
            navLink?.classList.add('active');

            // If the intro chapter is visible, hide the header
            if (chapter.id === 'intro') {
                header.style.maxHeight = '0';
                header.style.opacity = '0';
            }
        } else {
            // Remove 'active' class when the chapter is not visible
            navLink?.classList.remove('active');

            // If the intro chapter is NOT visible, show the header
            if (chapter.id === 'intro') {
                header.style.maxHeight = headerMaxHeight;
                header.style.opacity = '1';
            }
        }
    });
}, {
    threshold: 0.1  // The chapter is considered visible when 30% of it is in the viewport
});

// Observe each chapter
chapters.forEach(chapter => {
    observer.observe(chapter);
});

