document.addEventListener('DOMContentLoaded', function () {
    var typedAbout = document.querySelector('h1');

    var typewriter = new Typewriter(typedAbout, {
    loop: false,
    delay: 100,
    });

    
    typewriter
    .typeString('Experience')
    .pauseFor(300)
    .start();
});