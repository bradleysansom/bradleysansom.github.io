window.onload = function() {
    const darklight = document.querySelector('.toggleDarkTheme');
    darklight.addEventListener('click', function() {
        document.body.classList.toggle('darkTheme');
    })
    const darklightagain = document.querySelector('.secondaryToggleDarkTheme');
    darklightagain.addEventListener('click', function() {
        document.body.classList.toggle('darkTheme');
    })


}

function checkTheme(preference) {
    if (preference) {
        console.log('prefers dark theme');
        document.body.classList.toggle('lightTheme');
        document.getElementsByClassName('toggleDarkTheme')[0].checked = true;
    } else {
        console.log('prefers light theme');
        document.body.classList.toggle('darkTheme');
        document.getElementsByClassName('toggleDarkTheme')[0].checked = false;
    };
};
var preference = window.matchMedia('(prefers-color-scheme: dark)').matches;


function dashboardDarklight() {
    const darklight = document.querySelector('.toggleDarkTheme');
    darklight.addEventListener('click', function() {
        document.body.classList.toggle('darkTheme');
    })
    const darklightagain = document.querySelector('.secondaryToggleDarkTheme');
    darklightagain.addEventListener('click', function() {
        document.body.classList.toggle('darkTheme');
    })
}