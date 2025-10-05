// Este código debe ir en un archivo llamado 'script.js'

/**
 * Muestra la tarjeta de mensaje cuando se hace clic en el trofeo.
 */
function mostrarMensaje() {
    const tarjeta = document.getElementById('mensaje-tarjeta');
    
    // Muestra el contenedor primero
    tarjeta.style.display = 'flex';
    
    // Agrega la clase 'visible' después de un breve retraso para que la transición CSS funcione
    // Esto crea el efecto de que la tarjeta 'aparece' con la animación de escala
    setTimeout(() => {
        tarjeta.classList.add('visible');
    }, 10); // Un retraso muy pequeño es suficiente
}

/**
 * Oculta la tarjeta de mensaje cuando se hace clic en el botón de cerrar.
 */
function cerrarMensaje() {
    const tarjeta = document.getElementById('mensaje-tarjeta');
    
    // Remueve la clase 'visible' para activar la animación de salida (la tarjeta se encoge y desaparece)
    tarjeta.classList.remove('visible');
    
    // Oculta el contenedor después de que la animación de salida haya terminado
    setTimeout(() => {
        tarjeta.style.display = 'none';
    }, 500); // 500ms debe ser igual o mayor a la duración de la transición en CSS
}

// Opcional: Podrías agregar aquí más interacciones, como:
// - Efectos de sonido al tocar el trofeo.
// - Animaciones de Spiderman o el sobre que aparecen en el video.