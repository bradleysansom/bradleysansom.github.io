document.getElementById("contactDropdown").addEventListener("click", toggleDropdown);


function toggleDropdown() {
    document.getElementsByClassName("otherContactLinks")[0].classList.toggle("show");
    document.getElementById("contactDropdown").classList.toggle("down");
    document.getElementById("contactDropdown").classList.toggle("up");
    if (document.getElementsByClassName("down")[0] !== undefined) {
        document.getElementsByClassName("down")[0].innerHTML = '<span class="icon-chevron-down"></span><p class="dropdown"> More</p> ';


    } else {
        document.getElementsByClassName("up")[0].innerHTML = '<span class="icon-chevron-up"></span><p class="dropdown"> Less</p> ';

    }
}


