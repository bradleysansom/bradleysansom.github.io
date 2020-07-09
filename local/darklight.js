window.onload = function() {
    const darklight = document.querySelector('.toggleDarkTheme');
    darklight.addEventListener('click', function() {
        document.body.classList.toggle('darkTheme');
    })
}