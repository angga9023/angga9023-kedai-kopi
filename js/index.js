// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika di klik humberger nya akan tampil menu navbar
document.querySelector('#humberger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// klik diluar sitbar untuk menghilangkan nav nya
const humberger = document.querySelector('#humberger-menu');
document.addEventListener('click', function(e) {
    if(!humberger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});