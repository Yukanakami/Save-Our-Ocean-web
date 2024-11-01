/* document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('checkbox');
    const body = document.body;
    const navbar = document.querySelector('nav.navbar');
    const footer = document.querySelector('footer.footer');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            navbar.classList.remove('navbar-light');
            navbar.classList.add('navbar-dark');
            footer.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            navbar.classList.remove('navbar-dark');
            navbar.classList.add('navbar-light');
            footer.classList.remove('dark-mode');
        }
    }); 

    // Initialize the theme based on light mode by default
    body.classList.add('light-mode');
    navbar.classList.add('navbar-light');
}); */

    function revealOnScroll() {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        revealElements.forEach(function (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const viewHeight = window.innerHeight;
            if (elementPosition < viewHeight - 100) {
                element.classList.add('active');
            }
        });
    }

   
    window.addEventListener('scroll', revealOnScroll);

    
    revealOnScroll(); 




document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 1500); 
});
