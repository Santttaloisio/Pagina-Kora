document.addEventListener('DOMContentLoaded', () => {});
    
    function scrollCarrusel(direction) {
        const carrusel = document.getElementById('GaleriaCarrusel');
        const scrollAmount = 320;
        
        carrusel.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }