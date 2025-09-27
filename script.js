
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});


document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target.getAttribute('data-section');

    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.remove('active');
    });

    const activeSection = document.getElementById(target);
    if (activeSection) {
      activeSection.classList.add('active');
    }
  });
});

