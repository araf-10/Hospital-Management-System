// Smooth scroll functionality
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').substring(1);
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  