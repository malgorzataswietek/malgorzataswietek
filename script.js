const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});
window.addEventListener('load', () => {
  // resetuje scroll, nawet jeśli jest hash w URL
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 1);
});
document.getElementById('start-btn').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
});
