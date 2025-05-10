// Live Clock Function (your implementation)
function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var seconds = currentTime.getSeconds().toString().padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Initialize clock immediately and update every second
setInterval(displayTime, 1000);
displayTime();

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlight Active Section on Scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
        }
    });
});

// Optional: Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.rectangle, .rectangle1, .rectangle2, .welcome');
    elements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animations
window.addEventListener('load', () => {
    // Set initial state for animated elements
    document.querySelectorAll('.rectangle, .rectangle1, .rectangle2').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });
    
    document.querySelector('.welcome').style.opacity = '0';
    document.querySelector('.welcome').style.transform = 'scale(0.9)';
    document.querySelector('.welcome').style.transition = 'all 0.6s ease-out';
    
    // Trigger animations after a short delay
    setTimeout(() => {
        animateOnScroll();
    }, 300);
});

// Run on scroll
window.addEventListener('scroll', animateOnScroll);