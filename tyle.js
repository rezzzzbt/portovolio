// Typing Effect
const typingElement = document.querySelector('.typing');
const text = typingElement.textContent;
typingElement.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Glitch Effect
function glitchEffect() {
    const glitchText = document.querySelector('.glitch');
    setInterval(() => {
        glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
    }, 2000);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
            entry.target.style.animationPlayState = 'running';
        }
    });
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Initialize
window.addEventListener('load', () => {
    typeWriter();
    glitchEffect();
});
