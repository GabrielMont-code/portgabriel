// Efeito de Rolagem Suave para os Links da Navbar
const navLinks = document.querySelectorAll('nav .nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajuste conforme a altura da navbar
            behavior: 'smooth'
        });
    });
});
