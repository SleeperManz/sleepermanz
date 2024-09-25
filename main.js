document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            })
        }
    })
})

// logo reload when clicked
const logoElement = document.getElementById('Logo')
logoElement.style.cursor = 'pointer';
logoElement.addEventListener('click', function () {
    window.location.reload();
})