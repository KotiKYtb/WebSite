document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > header.offsetHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
