const containers = document.querySelectorAll('.container-fluid');
window.addEventListener('scroll', function() {
    containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;
        const isInViewPort = containerTop < (window.innerHeight * 0.8) && (containerTop + container.offsetHeight * 0.8) > 0;
    container.classList.toggle('show', isInViewPort)
   })
})

function copiarAlPortapapeles(texto) {
    // Crea un elemento de texto temporal
    var elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = texto;
  
    // Agrega el elemento temporal al DOM
    document.body.appendChild(elementoTemporal);
  
    // Selecciona y copia el texto dentro del elemento temporal
    elementoTemporal.select();
    document.execCommand('copy');
  
    // Elimina el elemento temporal del DOM
    document.body.removeChild(elementoTemporal);
  
    // Puedes mostrar una notificación u otra respuesta aquí
    alert('Texto copiado al portapapeles: ' + texto);
  }
  