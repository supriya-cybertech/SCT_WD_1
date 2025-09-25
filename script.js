// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = "#121212"; // Darker navbar on scroll
  } else {
    navbar.style.background = "rgba(18,18,18,0.95)"; // Default
  }
});

// ===== Skills Animation on Scroll =====
// Animate skill bars when section enters viewport
const skills = document.querySelectorAll('.skill-level');

function animateSkills() {
  const triggerBottom = window.innerHeight * 0.85;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;

    if(skillTop < triggerBottom && !skill.classList.contains('animated')){
      skill.style.width = skill.getAttribute('data-level');
      skill.classList.add('animated'); // prevents resetting
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);


// Trigger animation on page load and scroll
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
