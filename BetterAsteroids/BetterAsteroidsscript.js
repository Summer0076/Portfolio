const button_Nav_Acceueil = document.getElementById('NavAcceueil');
const button_Nav_Project = document.getElementById('NavProject');


button_Nav_Acceueil.addEventListener('click', function () {
    window.location.href = '../index.html';
});


button_Nav_Project.addEventListener('click', function () {
    window.location.href = '../index.html#ProjectCible';
});

