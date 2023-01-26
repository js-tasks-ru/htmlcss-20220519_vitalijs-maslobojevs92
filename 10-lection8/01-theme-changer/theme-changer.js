const changers = document.querySelectorAll('.toggler__input_theme');
const html = document.documentElement;

changers.forEach(changer => {
    changer.addEventListener('change', function () {
        html.toggleAttribute('data-theme-dark');
    });
});
