// Sélectionner le bouton par son ID
const bouton_BetterAsteroids = document.getElementById('BetterAsteroids_button');
const bouton_LoupGarou = document.getElementById('LoupGarou_button');
const bouton_FallingFrog = document.getElementById('FallingFrog_button');
const bouton_RobotsFight = document.getElementById('RobotsFight_button');
const bouton_LetsDiscovered = document.getElementById('LetsDiscovered_button');


const button_Nav_Project = document.getElementById('NavProject');
const Project_Cible = document.getElementById('ProjectCible');



bouton_BetterAsteroids.addEventListener('click', function () {
    window.location.href = 'BetterAsteroids/BetterAsteroids.html';
});


bouton_LoupGarou.addEventListener('click', function () {
    window.location.href = 'LoupGarou/LoupGarou.html';
});

bouton_FallingFrog.addEventListener('click', function () {
    window.location.href = 'FallingFrog/FallingFrog.html';
});

bouton_RobotsFight.addEventListener('click', function () {
    window.location.href = 'RobotsFight/RobotsFight.html';
});

bouton_LetsDiscovered.addEventListener('click', function () {
    window.location.href = 'LetsDiscovered/LetsDiscovered.html';
});

// Go to Project on click nav bar project

button_Nav_Project.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le défilement instantané
    Project_Cible.scrollIntoView({ behavior: 'smooth' });
});