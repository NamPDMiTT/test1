function myFunction() {
    var x = document.querySelector("#top__nav");
    if (x.className === "header_nav-link") {
        x.className += " responsive";
    } else {
        x.className = "header_nav-link";
    }
}