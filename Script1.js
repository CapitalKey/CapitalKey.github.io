const toggleButton = document.getElementsByClassName('toggle-button')[0];
const nav_links = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', () => {
    nav_links.classList.toggle('active')
})