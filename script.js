// Sélectionner le bouton par son ID
const bouton_BetterAsteroids = document.getElementById('BetterAsteroids_button');
const bouton_LoupGarou = document.getElementById('LoupGarou_button');

const button_Nav_Project = document.getElementById('NavProject');
const Project_Cible = document.getElementById('ProjectCible');



bouton_BetterAsteroids.addEventListener('click', function () {
    window.location.href = 'BetterAsteroids/BetterAsteroids.html';
});


bouton_LoupGarou.addEventListener('click', function () {
    window.location.href = 'LoupGarou/LoupGarou.html';
});

// Go to Project on click nav bar project

button_Nav_Project.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le défilement instantané
    Project_Cible.scrollIntoView({ behavior: 'smooth' });
});