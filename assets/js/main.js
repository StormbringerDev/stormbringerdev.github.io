const toggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const nextTheme = current === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', nextTheme);

  toggle.innerHTML =
    nextTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 200;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
