<script>
  const search = document.querySelector('.search-box');
  const searchIcon = document.querySelector('#search-icon');
  const menu = document.querySelector('.navbar');
  const menuIcon = document.querySelector('#menu-icon);
  const header = document.querySelector('header');

  searchIcon.onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
  };

  menuIcon.onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
  };

  window.addEventListener('scroll', () => {
    search.classList.remove('active');
    menu.classList.remove('active');
    header.classList.toggle('shadow', window.scrollY > 0);
  });
</script>

// Header
let Header = document.querySelector('header');

window.addEventListener('scroll', () => {
    Header.classList.toggle('shadow', window.scrollY > 0)
})