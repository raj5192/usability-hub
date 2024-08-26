var toggleButtton = document.getElementById('nav-toggle');
var navLinks = document.getElementById('nav-links');

toggleButtton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})
var changeIcon  = function(icon){
    icon.classList.toggle('fa-times')
}
changeIcon = (icon) => icon.classList.toggle('fa-times')