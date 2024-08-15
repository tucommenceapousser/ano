// Ajoutez un peu d'interactivité si nécessaire

// Par exemple, afficher une alerte lorsqu'une section est cliquée
document.querySelectorAll('.struggle').forEach(function(section) {
    section.addEventListener('click', function() {
        alert('Vous avez cliqué sur ' + section.querySelector('h3').innerText);
    });
});
