function addControlsAndZIndexToVideos() {
    // Seleccionar todos los elementos de video
    var videos = document.querySelectorAll('video');
    
    // Iterar sobre cada video y agregar el atributo controls si no lo tiene
    videos.forEach(function(video) {
        if (!video.hasAttribute('controls')) {
            video.setAttribute('controls', '');
        }
        // Agregar el estilo z-index
        video.style.position = 'relative';
        video.style.zIndex = '200';
        // Desmutear el video
        video.muted = false;
    });
}

// Llamar a la función por primera vez
addControlsAndZIndexToVideos();

// Ejecutar la función cada 10 segundos
setInterval(addControlsAndZIndexToVideos, 1000);