// Funkcja do pokazania wybranej sekcji
function pokazSekcje(id) {
    // Ukryj wszystkie sekcje
    const sekcje = document.querySelectorAll('.section');
    sekcje.forEach(sekcja => {
        sekcja.classList.remove('active');
    });
    
    // Pokaż wybraną sekcję
    const wybranaSekcja = document.getElementById(id);
    if (wybranaSekcja) {
        wybranaSekcja.classList.add('active');
        wybranaSekcja.style.display = 'block';
    }
}

// Funkcja do pokazania marki ciężarówek
function pokazMarki(id) {
    // Ukryj wszystkie marki
    const marki = document.querySelectorAll('.ciezarowki');
    marki.forEach(marka => {
        marka.style.display = 'none';
    });
    
    // Pokaż wybraną markę
    const wybranaMarka = document.getElementById(id);
    if (wybranaMarka) {
        wybranaMarka.style.display = 'block';
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
