const togglebtns = document.querySelectorAll('.nav-toggle');
const sideBar = document.querySelector('div.side-navbar');
const sidebarLinks = document.querySelectorAll('.side-navbar li');
const openLink = document.querySelectorAll('.side-navbar a');
const navMenu = document.querySelector('div.nav-menu');
const backgroundFader = document.getElementsByClassName('background-fader')[0];

function toggleSidebar() {
  sideBar.classList.toggle('show-side-navbar');
  backgroundFader.classList.toggle('fade-background');
}

togglebtns.forEach(togglebtn => {
  togglebtn.onclick = function() {
    toggleSidebar();
  };
});

backgroundFader.onclick = () => {
  toggleSidebar(); // this is much easier to understand
};

// Handle clicks on li element inside navigation sidebar
sidebarLinks.forEach(link => {
  link.onclick = e => {
    e.openLink();
  };
});
