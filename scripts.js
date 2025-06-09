function searchMovies() {
    const input = document.getElementById('search').value.toLowerCase();
    const peliculas = document.querySelectorAll('main a');

    peliculas.forEach(pelicula => {
        const title = pelicula.querySelector('.pelicula-title').textContent.toLowerCase();
        if (title.includes(input)) {
            pelicula.style.display = '';
        } else {
            pelicula.style.display = 'none';
        }
    });
}

const peliculas = {
    "Nosferatu": "nosferatu.html",
    "Frankenstein": "frankenstein.html",
    "The blob": "The_blob.html",
    "La Matanza de Texas": "matanza.html",
    "El Exorcista": "el_exorcista.html",
    "La Noche de los Muertos Vivientes": "livingdead.html",
    "Psicosis": "psicosis1960.html",
    "Halloween": "halloween.html",
    "El Resplandor": "resplandor.html",
    "Un Hombre Lobo Americano en Londres": "hombre_lobo.html",
    "Evil Dead": "evil_dead.html",
    "La Profecía": "profecia.html",
    "La Cosa": "cosa.html"
};

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('search').value.toLowerCase();
        const matchingMovies = Object.keys(peliculas).filter(title => title.toLowerCase().includes(input));

        const message = document.getElementById('message');
        if (matchingMovies.length > 0) {
            message.style.display = 'none';
            window.location.href = peliculas[matchingMovies[0]];
        } else {
            message.style.display = 'block';
        }
    }
}
