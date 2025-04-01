document.addEventListener('DOMContentLoaded', function() {
    // Variables pour les pages
    const landingPage = document.getElementById('landingPage');
    const multiforSite = document.getElementById('multiforSite');
    const startButton = document.getElementById('startButton');
    const aprilFoolModal = document.getElementById('aprilFoolModal');
    const closeModal = document.querySelector('.close-modal');
    
    // Fonction pour afficher le poisson d'avril immédiatement
    function showAprilFool() {
        // Masquer la page d'accueil
        landingPage.style.display = 'none';
        
        // Afficher brièvement le site Multifor
        multiforSite.style.display = 'block';
        
        // Après un court délai, afficher le poisson d'avril
        setTimeout(function() {
            aprilFoolModal.classList.add('active');
        }, 1000); // Délai de 1 seconde
    }
    
    // Fonction pour fermer le modal
    function closeModalFunc() {
        aprilFoolModal.classList.remove('active');
    }
    
    // Event Listeners
    startButton.addEventListener('click', showAprilFool);
    closeModal.addEventListener('click', closeModalFunc);
    
    // Fermer le modal en cliquant à l'extérieur
    window.addEventListener('click', function(e) {
        if (e.target === aprilFoolModal) {
            closeModalFunc();
        }
    });
    
    // Navigation douce dans le site Multifor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Effet de particules sur les boutons (simulation)
    const buttons = document.querySelectorAll('.btn, .form-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transition = 'all 0.3s';
            this.style.boxShadow = '0 5px 15px rgba(52, 152, 219, 0.4)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.boxShadow = 'none';
        });
    });
});