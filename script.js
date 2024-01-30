const containers = document.querySelectorAll('.container-fluid');

window.addEventListener('scroll', function() {
   const triggerBottom =  window.innerHeight / 5 * 4;

   containers.forEach(container => {
    const containerTop = container.getBoundingClientRect().top;

    if (containerTop < triggerBottom) {
        container.classList.add('show');
    } else {
        container.classList.remove('show');
    }
   })
})