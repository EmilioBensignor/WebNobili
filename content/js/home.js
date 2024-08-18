// Header
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (scrollPosition > 200) {
    header.style.backgroundColor = 'rgba(26, 28, 29, 0.4)';
  } else {
    header.style.backgroundColor = '#4A3929';
  }
})